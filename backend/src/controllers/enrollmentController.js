import Enrollment from "../models/enrollModel.js";
import Course from "../models/courseModel.js";

// Enroll in a course
export const enrollInCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const studentId = req.user._id;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      student: studentId,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course",
      });
    }

    // Create enrollment
    const enrollment = await Enrollment.create({
      student: studentId,
      course: courseId,
      amountPaid: course.discountedPrice || course.price || 0,
    });

    // Update course enrollment count
    await Course.findByIdAndUpdate(courseId, {
      $inc: { studentsEnrolled: 1 },
    });

    return res.status(201).json({
      success: true,
      message: "Successfully enrolled in course",
      enrollment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to enroll in course",
      error: error.message,
    });
  }
};

// Get user's enrollments
export const getUserEnrollments = async (req, res) => {
  try {
    const userId = req.params.userId || req.user._id;

    const enrollments = await Enrollment.find({ student: userId })
      .populate("course", "title price thumbnailImage rating")
      .sort({ enrollmentDate: -1 });

    return res.status(200).json({
      success: true,
      message: "Enrollments retrieved successfully",
      enrollments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch enrollments",
      error: error.message,
    });
  }
};

// Cancel enrollment
export const cancelEnrollment = async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const userId = req.user._id;

    const enrollment = await Enrollment.findOne({
      _id: enrollmentId,
      student: userId,
    });

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    enrollment.status = "cancelled";
    await enrollment.save();

    // Decrease course enrollment count
    await Course.findByIdAndUpdate(enrollment.course, {
      $inc: { studentsEnrolled: -1 },
    });

    return res.status(200).json({
      success: true,
      message: "Enrollment cancelled successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to cancel enrollment",
      error: error.message,
    });
  }
};

// Check enrollment status
export const checkEnrollmentStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const enrollment = await Enrollment.findOne({
      student: userId,
      course: courseId,
    });

    return res.status(200).json({
      success: true,
      enrolled: !!enrollment,
      enrollment: enrollment || null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to check enrollment status",
      error: error.message,
    });
  }
};
