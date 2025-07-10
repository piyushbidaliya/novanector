import mongoose from "mongoose";
import bcrypt from "bcryptjs";

/**
 * User Authentication Schema
 * Purpose: Defines the structure and validation rules for user accounts
 * Features: User registration, authentication, profile management
 */
const authSchema = new mongoose.Schema(
  {
    // ===== USER IDENTIFICATION =====
    username: {
      type: String,
      required: true, // Username is mandatory
      unique: true, // No duplicate usernames allowed
      trim: true, // Remove leading/trailing whitespace
      minlength: 3, // Minimum 3 characters
      maxlength: 20, // Maximum 20 characters
    },
    email: {
      type: String,
      required: true, // Email is mandatory
      unique: true, // No duplicate emails allowed
      trim: true, // Remove leading/trailing whitespace
      lowercase: true, // Convert to lowercase for consistency
      validate: {
        validator: function (v) {
          // Email format validation using regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },

    // ===== SECURITY =====
    password: {
      type: String,
      required: true, // Password is mandatory
      minlength: 9, // Minimum 9 characters for security
      // Note: Password will be hashed before saving (see pre-save hook)
    },

    // ===== PROFILE INFORMATION =====
    profilePicture: {
      type: String,
      default: null, // Allow null to use default later via pre-save hook
      validate: {
        validator: function (v) {
          // Skip validation if null or empty (will use default)
          if (!v || v.trim() === "") return true;

          // Check if it's a valid URL format
          const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/;
          // Check if it's a local file path (for uploaded files)
          const localPathRegex = /^.*\.(png|jpg|jpeg|gif|webp)$/i;

          return urlRegex.test(v) || localPathRegex.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid image URL or file path!`,
      },
    },

    // ===== USER ROLES =====
    role: {
      type: String,
      enum: ["admin", "instructor", "student", "user"], // Allowed roles
      default: "user", // Default role for new users
    },
  },
  {
    // ===== SCHEMA OPTIONS =====
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// ===== PRE-SAVE HOOKS =====

/**
 * Set default profile picture if none provided
 * Purpose: Ensures every user has a profile picture (default if none uploaded)
 * When: Runs before saving user document
 */
authSchema.pre("save", function (next) {
  // Only set default if profilePicture is null or empty
  if (!this.profilePicture || this.profilePicture.trim() === "") {
    this.profilePicture =
      "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735681234/novanector/default-profile-picture.png";
  }
  next();
});

/**
 * Hash password before saving
 * Purpose: Encrypt passwords for security (never store plain text passwords)
 * When: Runs before saving user document, only if password is modified
 */
authSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  // Why: Prevents re-hashing already hashed passwords
  if (!this.isModified("password")) return next();

  try {
    // Hash password with cost of 12 (good balance of security and performance)
    // Why: Higher cost = more secure but slower
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// ===== INSTANCE METHODS =====

/**
 * Compare password for authentication
 * Purpose: Verify if provided password matches stored hashed password
 * Usage: Used during login process
 * @param {string} candidatePassword - Plain text password to verify
 * @returns {Promise<boolean>} - True if password matches, false otherwise
 */
authSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/**
 * Remove password from JSON output
 * Purpose: Prevent password hash from being sent to client
 * When: Automatically called when user object is converted to JSON
 * Why: Security - never expose password hashes to frontend
 */
authSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password; // Remove password field
  return userObject;
};

// ===== MODEL CREATION =====

// Create and export the Auth model
// Why: This model will be used to interact with the users collection in MongoDB
const Auth = mongoose.model("Auth", authSchema);

export default Auth;
