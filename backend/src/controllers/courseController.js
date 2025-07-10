import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      duration,
      price,
      discountedPrice,
      instructor,
      category,
      level,
      language,
      maxStudents,
      isPublished,
      tags,
      curriculum,
    } = req.body;

    // Validate required fields first (before checking file)
    if (!title || !description || !instructor || !category || !curriculum) {
      return res.status(400).json({
        error:
          "All required fields must be provided: title, description, instructor, category, curriculum",
      });
    }

    // Validate that thumbnail image is uploaded
    if (!req.file) {
      return res.status(400).json({
        error: "Thumbnail image is required. Please upload an image file.",
      });
    }

    // Get thumbnail image from uploaded file
    const thumbnailImage = req.file.path;

    // Validate image type (multer already handles this, but double-check)
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

    // Validate image file size (additional check)
    if (req.file.size === 0) {
      return res.status(400).json({
        error: "Uploaded file is empty. Please upload a valid image.",
      });
    }

    // Create new course with all available fields
    const newCourse = {
      title,
      description,
      duration: duration || 0,
      price: price || 0,
      discountedPrice: discountedPrice || 0,
      instructor,
      category,
      level: level || "Beginner",
      language: language || "English",
      maxStudents: maxStudents || 100,
      isPublished: isPublished || false,
      tags: tags
        ? Array.isArray(tags)
          ? tags
          : tags.split(",").map((tag) => tag.trim())
        : [],
      curriculum,
      thumbnailImage,
    };

    const course = await Course.create(newCourse);

    return res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Get all courses with filtering and pagination
export const getAllCourses = async (req, res) => {
  try {
    const {
      category,
      level,
      language,
      minPrice,
      maxPrice,
      isPublished,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (level) filter.level = level;
    if (language) filter.language = language;
    if (isPublished !== undefined) filter.isPublished = isPublished === "true";

    // Price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Pagination
    const skip = (page - 1) * limit;
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const courses = await Course.find(filter)
      .populate("instructor", "username email")
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const total = await Course.countDocuments(filter);

    return res.status(200).json({
      message: "Courses retrieved successfully",
      courses,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalCourses: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Get course by ID
export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id).populate(
      "instructor",
      "username email"
    );

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    return res.status(200).json({
      message: "Course retrieved successfully",
      course,
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Update course
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      duration,
      price,
      discountedPrice,
      category,
      level,
      language,
      maxStudents,
      isPublished,
      tags,
      curriculum,
    } = req.body;

    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Update fields if provided
    if (title) course.title = title;
    if (description) course.description = description;
    if (duration !== undefined) course.duration = duration;
    if (price !== undefined) course.price = price;
    if (discountedPrice !== undefined) course.discountedPrice = discountedPrice;
    if (category) course.category = category;
    if (level) course.level = level;
    if (language) course.language = language;
    if (maxStudents !== undefined) course.maxStudents = maxStudents;
    if (isPublished !== undefined) course.isPublished = isPublished;
    if (curriculum) course.curriculum = curriculum;

    // Handle tags (convert string to array if needed)
    if (tags !== undefined) {
      course.tags = Array.isArray(tags)
        ? tags
        : tags.split(",").map((tag) => tag.trim());
    }

    // Update thumbnail if new image uploaded
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

      course.thumbnailImage = req.file.path;
    }

    course.updatedAt = Date.now();
    await course.save();

    return res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    console.error("Error updating course:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Delete course
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    return res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting course:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Search courses by title or description
export const searchCourses = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const searchFilter = {
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { tags: { $in: [new RegExp(query, "i")] } },
      ],
      isPublished: true,
    };

    const skip = (page - 1) * limit;
    const courses = await Course.find(searchFilter)
      .populate("instructor", "username email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Course.countDocuments(searchFilter);

    return res.status(200).json({
      message: "Search results retrieved successfully",
      courses,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalResults: total,
      },
    });
  } catch (error) {
    console.error("Error searching courses:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Get courses by category
export const getCoursesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;
    const courses = await Course.find({
      category,
      isPublished: true,
    })
      .populate("instructor", "username email")
      .sort({ rating: -1, studentsEnrolled: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Course.countDocuments({ category, isPublished: true });

    return res.status(200).json({
      message: `Courses in ${category} retrieved successfully`,
      courses,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalCourses: total,
      },
    });
  } catch (error) {
    console.error("Error fetching courses by category:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Get featured/popular courses
export const getFeaturedCourses = async (req, res) => {
  try {
    const { limit = 6 } = req.query;

    const courses = await Course.find({
      isPublished: true,
      rating: { $gte: 4.0 },
    })
      .populate("instructor", "username email")
      .sort({ rating: -1, studentsEnrolled: -1 })
      .limit(Number(limit));

    return res.status(200).json({
      message: "Featured courses retrieved successfully",
      courses,
    });
  } catch (error) {
    console.error("Error fetching featured courses:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Publish/Unpublish course
export const toggleCoursePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    course.isPublished = !course.isPublished;
    await course.save();

    return res.status(200).json({
      message: `Course ${
        course.isPublished ? "published" : "unpublished"
      } successfully`,
      course,
    });
  } catch (error) {
    console.error("Error toggling course publication:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Get instructor's courses
export const getInstructorCourses = async (req, res) => {
  try {
    const { instructorId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;
    const courses = await Course.find({ instructor: instructorId })
      .populate("instructor", "username email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Course.countDocuments({ instructor: instructorId });

    return res.status(200).json({
      message: "Instructor courses retrieved successfully",
      courses,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalCourses: total,
      },
    });
  } catch (error) {
    console.error("Error fetching instructor courses:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};
