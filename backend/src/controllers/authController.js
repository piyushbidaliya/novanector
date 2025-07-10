import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Auth from "../models/authModel.js";

// Register new user
export const createAuth = async (req, res) => {
  try {
    const { username, email, password, profilePicture, role } = req.body;

    // Input validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required.",
      });
    }

    const uploadedFile = req.file;

    if (password.length < 9) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 9 characters long.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Validate profile picture URL (only if provided and not empty)
    // Why: Ensure URL is valid image URL if provided
    if (
      profilePicture &&
      profilePicture.trim() !== "" &&
      !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(profilePicture)
    ) {
      return res.status(400).json({
        success: false, // ✅ FIXED: Added consistency
        message: "Invalid profile picture URL.",
      });
    }

    // Validate user role
    // Why: Ensure only valid roles are assigned
    const validRoles = ["admin", "instructor", "student", "user"];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({
        success: false, // ✅ FIXED: Added consistency
        message: "Invalid role.",
      });
    }

    // ===== DUPLICATE USER CHECK =====

    // Check if user already exists (by email or username)
    // Why: Prevent duplicate accounts with same email/username
    const existingUser = await Auth.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          existingUser.email === email
            ? "User with this email already exists."
            : "Username is already taken.",
      });
    }

    // ===== PROFILE PICTURE HANDLING =====

    // Handle profile picture upload/URL
    // Default to null to let model handle defaults
    let profilePictureUrl = null;

    if (uploadedFile) {
      // If file is uploaded, convert to URL format for frontend
      // Why: Create accessible URL for uploaded file
      const protocol = req.protocol;
      const host = req.get("host");
      const relativePath = uploadedFile.path
        .replace(/\\/g, "/")
        .split("/uploads/")[1];
      profilePictureUrl = `${protocol}://${host}/uploads/${relativePath}`;
    } else if (profilePicture && profilePicture.trim() !== "") {
      // If profile picture URL is provided and not empty, use it
      profilePictureUrl = profilePicture;
    }
    // If profilePictureUrl is still null, the model will handle the default

    // ===== USER CREATION =====

    // Create new user data object
    // Why: Prepare data for database insertion
    const newUserData = {
      username,
      email,
      password,
      role,
    };

    // Only add profilePicture if it's not null
    // Why: Let model handle default values when null
    if (profilePictureUrl !== null) {
      newUserData.profilePicture = profilePictureUrl;
    }

    // Create new user instance
    const newUser = new Auth(newUserData);

    // Save user to database
    // Why: Persist user data (password will be hashed by pre-save hook)
    await newUser.save();

    // ===== SUCCESS RESPONSE =====

    // Respond with success message and user info
    // Why: Confirm registration and provide user details (password excluded by toJSON)
    res.status(201).json({
      success: true, // ✅ FIXED: Changed from 'status' to 'success' for consistency
      message: "User created successfully.",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
        role: newUser.role,
      },
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Handle mongoose validation errors
    // Why: Provide specific error messages for validation failures
    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({
        success: false,
        message: "Validation error.",
        errors: errorMessages,
      });
    }

    // Handle general errors
    // Why: Log errors for debugging while hiding details from client
    console.error("Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ===== USER LOGIN =====

/**
 * User login authentication
 * Purpose: Authenticate users and provide JWT token
 * Method: POST /api/auth/login
 * Body: { email, password }
 * Returns: JWT token and user info (excluding password)
 */
export const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ===== INPUT VALIDATION =====

    // Check if email and password are provided
    // Why: Both fields are required for authentication
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Trim and validate email format
    // Why: Ensure email is properly formatted and consistent
    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Validate password length
    // Why: Ensure password meets minimum requirements
    if (password.length < 9) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 9 characters long.",
      });
    }

    // ===== USER AUTHENTICATION =====

    // Find user by email
    // Why: Locate user account for authentication
    const existingUser = await Auth.findOne({ email: trimmedEmail });

    // Always check password even if user doesn't exist (prevent timing attacks)
    // Why: Consistent response time prevents email enumeration attacks
    let isPasswordValid = false;
    if (existingUser) {
      isPasswordValid = await existingUser.comparePassword(password);
    } else {
      // Perform dummy password comparison to prevent timing attacks
      // Why: Same computational time whether user exists or not
      await bcrypt.compare(password, "$2a$12$dummyhashtopreventtimingattacks");
    }

    // Generic error message for both invalid email and password
    // Why: Don't reveal whether email exists or password is wrong
    if (!existingUser || !isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // ===== JWT TOKEN GENERATION =====

    // Generate access token
    // Why: Provide authentication token for subsequent requests
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // Token expires in 7 days
    );

    // ===== SUCCESS RESPONSE =====

    // Respond with user info and token
    // Why: Provide authentication token and user details for frontend
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        role: existingUser.role,
      },
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Log error for debugging
    console.error("Error logging in user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ===== GET ALL USERS =====

/**
 * Get all users (Admin/Development function)
 * Purpose: Retrieve all users from database
 * Method: GET /api/auth/getall
 * Returns: Array of all users (excluding passwords)
 * Note: Should be protected with admin auth in production
 */
export const getAllUser = async (req, res) => {
  try {
    // ===== FETCH ALL USERS =====

    // Retrieve all users from database
    // Why: Get complete user list for admin/development purposes
    const users = await Auth.find({});

    // ===== SUCCESS RESPONSE =====

    // Return all users (passwords excluded by toJSON method)
    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      count: users.length,
      users: users,
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Log error for debugging
    console.error("Error retrieving users:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ===== GET SINGLE USER BY ID =====

/**
 * Get user by ID
 * Purpose: Retrieve a single user's information by their unique ID
 * Method: GET /api/auth/one/:id
 * Params: { id } - MongoDB ObjectId of the user
 * Returns: User object (excluding password) or error message
 * Security: Validates ObjectId format before database query
 */
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    // ===== INPUT VALIDATION =====

    // Validate ObjectId format to prevent invalid database queries
    // Why: Invalid ObjectId format can cause database errors
    // Pattern: 24 character hexadecimal string (MongoDB ObjectId format)
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format.",
      });
    }

    // ===== DATABASE QUERY =====

    // Find user by ID and exclude password from response
    // Why: Password should never be returned to client for security
    const user = await Auth.findById(id).select("-password");

    // ===== RESPONSE HANDLING =====

    // Check if user exists in database
    // Why: Provide clear error message when user is not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Return user data if found
    // Why: Provide user information for client use
    return res.status(200).json({
      success: true,
      message: "User retrieved successfully.",
      user: user,
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Log error for debugging purposes
    // Why: Server errors need to be tracked for maintenance
    console.error("Error retrieving user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ===== DELETE USER BY ID =====

/**
 * Delete user by ID
 * Purpose: Remove a user account from the database
 * Method: DELETE /api/auth/delete/:id
 * Params: { id } - MongoDB ObjectId of the user to delete
 * Returns: Success message or error message
 * Security: Validates ObjectId format and checks user existence before deletion
 * Note: This action is irreversible - consider soft delete for production
 */
export const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    // ===== INPUT VALIDATION =====

    // Validate ObjectId format to prevent invalid database queries
    // Why: Invalid ObjectId format can cause database errors
    // Pattern: 24 character hexadecimal string (MongoDB ObjectId format)
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format.",
      });
    }

    // ===== USER EXISTENCE CHECK =====

    // Check if user exists before attempting deletion
    // Why: Provide clear error message if user doesn't exist
    // Performance: Prevents unnecessary delete operation
    const userToDelete = await Auth.findById(id);
    if (!userToDelete) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // ===== DATABASE DELETION =====

    // Delete user from database
    // Why: Remove user data as requested
    // Note: This is a hard delete - consider soft delete for production
    await Auth.findByIdAndDelete(id);

    // ===== SUCCESS RESPONSE =====

    // Confirm successful deletion
    // Why: Provide feedback that operation completed successfully
    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Log error for debugging purposes
    // Why: Server errors need to be tracked for maintenance
    console.error("Error deleting user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ===== UPDATE USER PROFILE =====

/**
 * Update user profile information
 * Purpose: Allow modification of user profile data (username, email, role)
 * Method: PUT /api/auth/update/:id
 * Params: { id } - MongoDB ObjectId of the user to update
 * Body: { username?, email?, role? } - Fields to update (at least one required)
 * Returns: Updated user object (excluding password) or error message
 * Security: Validates input, checks for duplicates, prevents unauthorized changes
 * Validation: ObjectId format, email format, role validation, duplicate checking
 */
export const updatedUserProfile = async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;

  try {
    // ===== INPUT VALIDATION =====

    // Validate ObjectId format to prevent invalid database queries
    // Why: Invalid ObjectId format can cause database errors
    // Pattern: 24 character hexadecimal string (MongoDB ObjectId format)
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format.",
      });
    }

    // Ensure at least one field is provided for update
    // Why: Prevent empty update operations that serve no purpose
    if (!username && !email && !role) {
      return res.status(400).json({
        success: false,
        message:
          "At least one field (username, email, or role) is required to update.",
      });
    }

    // ===== FIELD-SPECIFIC VALIDATION =====

    // Validate email format if provided
    // Why: Ensure email is properly formatted before saving
    // Pattern: Standard email regex pattern
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Validate role if provided
    // Why: Ensure only valid roles are assigned to users
    // Security: Prevents assignment of unauthorized roles
    if (role) {
      const validRoles = ["admin", "instructor", "student", "user"];
      if (!validRoles.includes(role)) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid role. Must be one of: admin, instructor, student, user.",
        });
      }
    }

    // ===== DUPLICATE CHECKING =====

    // Check for duplicate username/email with other users
    // Why: Maintain uniqueness constraints in database
    // Logic: Exclude current user from duplicate check
    if (username || email) {
      const duplicateCheck = {};
      if (username) duplicateCheck.username = username.trim();
      if (email) duplicateCheck.email = email.toLowerCase().trim();

      // Query to find existing users with same username/email (excluding current user)
      // Why: Prevent conflicts with existing user accounts
      const existingUser = await Auth.findOne({
        $and: [
          { _id: { $ne: id } }, // Exclude current user from check
          {
            $or: Object.entries(duplicateCheck).map(([key, value]) => ({
              [key]: value,
            })),
          },
        ],
      });

      // Return error if duplicate found
      // Why: Provide specific error message about which field is duplicated
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message:
            existingUser.username === username
              ? "Username already exists."
              : "Email already exists.",
        });
      }
    }

    // ===== UPDATE OPERATION =====

    // Build update object with only provided fields
    // Why: Only update fields that were actually provided
    // Security: Prevents accidental field clearing
    const updateData = {};
    if (username) updateData.username = username.trim();
    if (email) updateData.email = email.toLowerCase().trim();
    if (role) updateData.role = role;

    // Perform database update with validation
    // Options: new: true returns updated document, runValidators: true applies schema validation
    const updatedUser = await Auth.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated document
      runValidators: true, // Apply schema validation
    }).select("-password"); // Exclude password from response

    // ===== RESPONSE HANDLING =====

    // Check if user was found and updated
    // Why: Handle case where user ID doesn't exist
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Return updated user data
    // Why: Provide confirmation of successful update with new data
    return res.status(200).json({
      success: true,
      message: "User profile updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    // ===== ERROR HANDLING =====

    // Handle mongoose validation errors specifically
    // Why: Provide detailed error messages for validation failures
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error.",
        errors: Object.values(error.errors).map((err) => err.message),
      });
    }

    // Handle general server errors
    // Why: Log errors for debugging while hiding details from client
    console.error("Error updating user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// signin with google
// export const googleAuth = async (req, res) => {
//   try {
//     const { email, name, picture } = req.body;

//     // Check if user already exists
//     const existingUser = await Auth.findOne({ email });
//     if (existingUser) {
//       // User exists, generate JWT token
//       const token = jwt.sign(
//         {
//           userId: existingUser._id,
//           email: existingUser.email,
//           role: existingUser.role,
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: "7d" }
//       );

//       return res.status(200).json({
//         success: true,
//         message: "Login successful.",
//         token,
//         user: {
//           id: existingUser._id,
//           username: existingUser.username,
//           email: existingUser.email,
//           profilePicture: existingUser.profilePicture,
//           role: existingUser.role,
//         },
//       });
//     }
//   } catch (error) {
//     console.error("Error during Google authentication:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error. Please try again later.",
//     });
//   }
// };
