import Course from "../models/courseModel.js";
import Enrollment from "../models/enrollModel.js";
import Cart from "../models/cartModel.js";

// Check if user has access to a specific course
export const hasCourseAccess = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required.",
        error: "MISSING_COURSE_ID",
      });
    }

    // Admin has access to all courses
    if (req.user.role === "admin") {
      return next();
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
        error: "COURSE_NOT_FOUND",
      });
    }

    // Course instructor has access
    if (course.instructor.toString() === userId.toString()) {
      req.courseRole = "instructor";
      return next();
    }

    // Check if user is enrolled in the course
    const enrollment = await Enrollment.findOne({
      student: userId,
      course: courseId,
      status: "active",
    });

    if (enrollment) {
      req.courseRole = "student";
      req.enrollment = enrollment;
      return next();
    }

    return res.status(403).json({
      success: false,
      message:
        "Access denied. You must be enrolled in this course or be the instructor.",
      error: "COURSE_ACCESS_DENIED",
    });
  } catch (error) {
    console.error("Course access error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check course access.",
      error: "COURSE_ACCESS_ERROR",
    });
  }
};

// Check if user is the course instructor
export const isCourseInstructor = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required.",
        error: "MISSING_COURSE_ID",
      });
    }

    // Admin has instructor-level access to all courses
    if (req.user.role === "admin") {
      return next();
    }

    // Check if course exists and user is the instructor
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
        error: "COURSE_NOT_FOUND",
      });
    }

    if (course.instructor.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You must be the course instructor.",
        error: "NOT_COURSE_INSTRUCTOR",
      });
    }

    req.course = course;
    next();
  } catch (error) {
    console.error("Course instructor check error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to verify course instructor.",
      error: "INSTRUCTOR_CHECK_ERROR",
    });
  }
};

// Check if user is enrolled in a course
export const isEnrolledInCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required.",
        error: "MISSING_COURSE_ID",
      });
    }

    // Admin and course instructor have access
    if (req.user.role === "admin") {
      return next();
    }

    const course = await Course.findById(courseId);
    if (course && course.instructor.toString() === userId.toString()) {
      return next();
    }

    // Check enrollment
    const enrollment = await Enrollment.findOne({
      student: userId,
      course: courseId,
      status: "active",
    });

    if (!enrollment) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You must be enrolled in this course.",
        error: "NOT_ENROLLED",
      });
    }

    req.enrollment = enrollment;
    next();
  } catch (error) {
    console.error("Enrollment check error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check enrollment status.",
      error: "ENROLLMENT_CHECK_ERROR",
    });
  }
};

// Check if user owns the cart
export const isCartOwner = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { cartId } = req.params;

    // Admin can access all carts
    if (req.user.role === "admin") {
      return next();
    }

    let cart;
    if (cartId) {
      cart = await Cart.findById(cartId);
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found.",
          error: "CART_NOT_FOUND",
        });
      }

      if (cart.user.toString() !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Access denied. You can only access your own cart.",
          error: "NOT_CART_OWNER",
        });
      }
    } else {
      // If no cartId, check if user is accessing their own cart via user ID
      const { userId: requestUserId } = req.params;
      const queryUserId = requestUserId || req.query.userId || req.body.userId;

      if (queryUserId && queryUserId !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Access denied. You can only access your own cart.",
          error: "NOT_CART_OWNER",
        });
      }
    }

    next();
  } catch (error) {
    console.error("Cart ownership check error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check cart ownership.",
      error: "CART_OWNERSHIP_ERROR",
    });
  }
};

// Check if course is published (for public access)
export const isPublishedCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required.",
        error: "MISSING_COURSE_ID",
      });
    }

    // Admin and instructors can access unpublished courses
    if (
      req.user &&
      (req.user.role === "admin" || req.user.role === "instructor")
    ) {
      return next();
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
        error: "COURSE_NOT_FOUND",
      });
    }

    // Course instructor can access unpublished course
    if (req.user && course.instructor.toString() === req.user._id.toString()) {
      return next();
    }

    if (!course.isPublished) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Course is not published.",
        error: "COURSE_NOT_PUBLISHED",
      });
    }

    next();
  } catch (error) {
    console.error("Published course check error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check course publication status.",
      error: "PUBLICATION_CHECK_ERROR",
    });
  }
};

// Check if user can modify course (instructor or admin)
export const canModifyCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    // Admin can modify all courses
    if (req.user.role === "admin") {
      return next();
    }

    // Only instructors can modify courses
    if (req.user.role !== "instructor") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Only instructors can modify courses.",
        error: "INSTRUCTOR_REQUIRED",
      });
    }

    if (courseId) {
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found.",
          error: "COURSE_NOT_FOUND",
        });
      }

      if (course.instructor.toString() !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Access denied. You can only modify your own courses.",
          error: "NOT_COURSE_OWNER",
        });
      }

      req.course = course;
    }

    next();
  } catch (error) {
    console.error("Course modification check error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check course modification permissions.",
      error: "MODIFICATION_CHECK_ERROR",
    });
  }
};
