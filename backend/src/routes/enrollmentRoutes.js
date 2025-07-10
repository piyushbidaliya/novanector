import express from "express";
import {
  enrollInCourse,
  getUserEnrollments,
  cancelEnrollment,
  checkEnrollmentStatus,
} from "../controllers/enrollmentController.js";
import { isAuthenticated, isStudent, isAdmin } from "../middleware/auth.js";
import {
  validateObjectId,
  validateEnrollmentInput,
} from "../middleware/validation.js";

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Enrollment routes working!",
    endpoints: [
      "POST /enroll - Enroll in course",
      "GET /my-enrollments - Get user's enrollments",
      "DELETE /cancel/:enrollmentId - Cancel enrollment",
      "GET /check/:courseId - Check enrollment status",
    ],
  });
});

// Enroll in course
router.post(
  "/enroll",
  isAuthenticated,
  isStudent,
  validateEnrollmentInput,
  enrollInCourse
);

// Get user's enrollments
router.get(
  "/my-enrollments",
  isAuthenticated,
  isStudent,
  (req, res, next) => {
    req.params.userId = req.user._id.toString();
    next();
  },
  getUserEnrollments
);

// Cancel enrollment
router.delete(
  "/cancel/:enrollmentId",
  isAuthenticated,
  isStudent,
  validateObjectId("enrollmentId"),
  cancelEnrollment
);

// Check enrollment status
router.get(
  "/check/:courseId",
  isAuthenticated,
  isStudent,
  validateObjectId("courseId"),
  checkEnrollmentStatus
);

// Admin: Get any user's enrollments
router.get(
  "/user/:userId",
  isAuthenticated,
  isAdmin,
  validateObjectId("userId"),
  getUserEnrollments
);

export default router;
