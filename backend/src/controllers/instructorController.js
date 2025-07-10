import Instructor from "../models/instructorModel.js";

export const createInstructor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    // Validate required fields
    if (!name || !email || !bio) {
      return res.status(400).json({
        error: "All fields are required: name, email, bio",
      });
    }

    // Check if instructor already exists
    const existingInstructor = await Instructor.findOne({ email });
    if (existingInstructor) {
      return res.status(400).json({
        error: "Instructor with this email already exists",
      });
    }

    // Get instructor image from uploaded file (optional)
    let instructorImage = null;
    if (req.file) {
      // Validate image type
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!validImageTypes.includes(req.file.mimetype)) {
        return res.status(400).json({
          error: "Invalid image type. Please upload a valid image file.",
        });
      }

      // Validate image file size
      if (req.file.size === 0) {
        return res.status(400).json({
          error: "Uploaded file is empty. Please upload a valid image.",
        });
      }

      instructorImage = req.file.path;
    }

    // Create new instructor
    const instructorData = {
      name,
      email,
      bio,
    };

    // Add image if uploaded
    if (instructorImage) {
      instructorData.image = instructorImage;
    }

    const newInstructor = new Instructor(instructorData);
    await newInstructor.save();

    return res.status(201).json({
      message: "Instructor created successfully",
      instructor: newInstructor,
    });
  } catch (error) {
    console.error("Error creating instructor:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// single instructor by ID
export const getInstructorById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({
        error: "Instructor ID is required",
      });
    }

    // Fetch instructor by ID
    const instructor = await Instructor.findById(id);
    if (!instructor) {
      return res.status(404).json({
        error: "Instructor not found",
      });
    }

    return res.status(200).json({
      instructor,
    });
  } catch (error) {
    console.error("Error fetching instructor:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};
// Get all instructors
export const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    return res.status(200).json({
      instructors,
    });
  } catch (error) {
    console.error("Error fetching instructors:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Update instructor
export const updateInstructor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    const instructor = await Instructor.findById(id);
    if (!instructor) {
      return res.status(404).json({ error: "Instructor not found" });
    }

    // Update fields if provided
    if (name) instructor.name = name;
    if (email) instructor.email = email;
    if (bio) instructor.bio = bio;

    // Update image if new image uploaded
    if (req.file) {
      // Validate image type
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!validImageTypes.includes(req.file.mimetype)) {
        return res.status(400).json({
          error: "Invalid image type. Please upload a valid image file.",
        });
      }

      // Validate image file size
      if (req.file.size === 0) {
        return res.status(400).json({
          error: "Uploaded file is empty. Please upload a valid image.",
        });
      }

      instructor.image = req.file.path;
    }

    await instructor.save();

    return res.status(200).json({
      message: "Instructor updated successfully",
      instructor,
    });
  } catch (error) {
    console.error("Error updating instructor:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Delete instructor
export const deleteInstructor = async (req, res) => {
  try {
    const { id } = req.params;
    const instructor = await Instructor.findByIdAndDelete(id);

    if (!instructor) {
      return res.status(404).json({ error: "Instructor not found" });
    }

    return res.status(200).json({
      message: "Instructor deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting instructor:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};
