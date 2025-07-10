import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  searchCourses,
  getCoursesByCategory,
  getFeaturedCourses,
  toggleCoursePublication,
  getInstructorCourses,
} from "../controllers/courseController.js";
import {
  handleMulterError,
  uploadCourseThumbnail,
  validateFile,
} from "../config/multer.js";
import {
  isAuthenticated,
  isInstructorOrAdmin,
  isAdmin,
  optionalAuth,
} from "../middleware/auth.js";
import {
  canModifyCourse,
  isPublishedCourse,
  isCourseInstructor,
} from "../middleware/courseAccess.js";
import {
  validateCourseCreation,
  validateCourseUpdate,
  validatePagination,
  validateSearch,
  validateObjectId,
  handleValidationErrors,
  sanitizeInput,
} from "../middleware/validation.js";

const router = express.Router();

// Test endpoint
router.get("/test", (req, res) => {
  res.json({
    message: "Course routes are working",
    endpoints: [
      "GET /api/courses - Get all courses",
      "POST /api/courses/create-course - Create course",
      "PUT /api/courses/:id - Update course",
      "DELETE /api/courses/:id - Delete course",
    ],
  });
});

// Course routes with authentication and authorization
router.get(
  "/",
  optionalAuth,
  validatePagination,
  handleValidationErrors,
  getAllCourses
);

router.get(
  "/search",
  optionalAuth,
  validateSearch,
  validatePagination,
  handleValidationErrors,
  searchCourses
);

router.get("/featured", optionalAuth, getFeaturedCourses);

router.get(
  "/category/:category",
  optionalAuth,
  validatePagination,
  handleValidationErrors,
  getCoursesByCategory
);

router.get(
  "/instructor/:instructorId",
  validateObjectId("instructorId"),
  validatePagination,
  handleValidationErrors,
  getInstructorCourses
);

router.get(
  "/:id",
  validateObjectId(),
  handleValidationErrors,
  optionalAuth,
  isPublishedCourse,
  getCourseById
);

router.post(
  "/create-course",
  sanitizeInput,
  isAuthenticated,
  isInstructorOrAdmin,
  uploadCourseThumbnail,
  handleMulterError,
  validateFile,
  validateCourseCreation,
  handleValidationErrors,
  createCourse
);

router.put(
  "/:id",
  sanitizeInput,
  validateObjectId(),
  isAuthenticated,
  canModifyCourse,
  uploadCourseThumbnail,
  handleMulterError,
  validateFile,
  validateCourseUpdate,
  handleValidationErrors,
  updateCourse
);

router.patch(
  "/:id/toggle-publication",
  validateObjectId(),
  isAuthenticated,
  isCourseInstructor,
  handleValidationErrors,
  toggleCoursePublication
);

router.delete(
  "/:id",
  validateObjectId(),
  isAuthenticated,
  canModifyCourse,
  handleValidationErrors,
  deleteCourse
);

export default router;
