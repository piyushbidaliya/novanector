import { body, param, query, validationResult } from "express-validator";
import mongoose from "mongoose";

// Handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
        value: err.value,
      })),
    });
  }
  next();
};

// MongoDB ObjectId validation
export const validateObjectId = (field = "id") => {
  return param(field).custom((value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error(`Invalid ${field} format`);
    }
    return true;
  });
};

// User registration validation
export const validateUserRegistration = [
  body("username")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),

  body("role")
    .optional()
    .isIn(["student", "instructor", "admin"])
    .withMessage("Role must be either student, instructor, or admin"),
];

// User login validation
export const validateUserLogin = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),

  body("password").notEmpty().withMessage("Password is required"),
];

// Course creation validation
export const validateCourseCreation = [
  body("title")
    .isLength({ min: 3, max: 100 })
    .trim()
    .withMessage("Course title must be between 3 and 100 characters"),

  body("description")
    .isLength({ min: 10, max: 500 })
    .trim()
    .withMessage("Course description must be between 10 and 500 characters"),

  body("category")
    .isIn([
      "Digital Marketing",
      "Web Development",
      "Data Science",
      "Business Analytics",
      "Graphics Design",
      "Java Fullstack",
      "Mobile Development",
      "DevOps",
      "Cybersecurity",
    ])
    .withMessage("Please select a valid course category"),

  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("discountedPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discounted price must be a positive number"),

  body("level")
    .optional()
    .isIn(["Beginner", "Intermediate", "Advanced"])
    .withMessage("Level must be Beginner, Intermediate, or Advanced"),

  body("language")
    .optional()
    .isLength({ min: 2, max: 20 })
    .withMessage("Language must be between 2 and 20 characters"),

  body("maxStudents")
    .optional()
    .isInt({ min: 1, max: 10000 })
    .withMessage("Max students must be between 1 and 10000"),

  body("curriculum").notEmpty().trim().withMessage("Curriculum is required"),
];

// Course update validation
export const validateCourseUpdate = [
  body("title")
    .optional()
    .isLength({ min: 3, max: 100 })
    .trim()
    .withMessage("Course title must be between 3 and 100 characters"),

  body("description")
    .optional()
    .isLength({ min: 10, max: 500 })
    .trim()
    .withMessage("Course description must be between 10 and 500 characters"),

  body("category")
    .optional()
    .isIn([
      "Digital Marketing",
      "Web Development",
      "Data Science",
      "Business Analytics",
      "Graphics Design",
      "Java Fullstack",
      "Mobile Development",
      "DevOps",
      "Cybersecurity",
    ])
    .withMessage("Please select a valid course category"),

  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("discountedPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discounted price must be a positive number"),

  body("level")
    .optional()
    .isIn(["Beginner", "Intermediate", "Advanced"])
    .withMessage("Level must be Beginner, Intermediate, or Advanced"),

  body("maxStudents")
    .optional()
    .isInt({ min: 1, max: 10000 })
    .withMessage("Max students must be between 1 and 10000"),
];

// Instructor creation validation
export const validateInstructorCreation = [
  body("name")
    .isLength({ min: 2, max: 50 })
    .trim()
    .withMessage("Name must be between 2 and 50 characters"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),

  body("bio")
    .isLength({ min: 10, max: 500 })
    .trim()
    .withMessage("Bio must be between 10 and 500 characters"),
];

// Cart validation
export const validateCartOperation = [
  body("courseId").custom((value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error("Invalid course ID format");
    }
    return true;
  }),

  body("userId")
    .optional()
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Invalid user ID format");
      }
      return true;
    }),
];

// Pagination validation
export const validatePagination = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be a positive integer"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be between 1 and 100"),

  query("sortBy")
    .optional()
    .isIn([
      "createdAt",
      "updatedAt",
      "title",
      "price",
      "rating",
      "studentsEnrolled",
    ])
    .withMessage("Invalid sort field"),

  query("sortOrder")
    .optional()
    .isIn(["asc", "desc"])
    .withMessage("Sort order must be 'asc' or 'desc'"),
];

// Search validation
export const validateSearch = [
  query("query")
    .isLength({ min: 1, max: 100 })
    .trim()
    .withMessage("Search query must be between 1 and 100 characters"),
];

// Price range validation
export const validatePriceRange = [
  query("minPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Minimum price must be a positive number"),

  query("maxPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Maximum price must be a positive number")
    .custom((value, { req }) => {
      if (
        req.query.minPrice &&
        parseFloat(value) < parseFloat(req.query.minPrice)
      ) {
        throw new Error("Maximum price must be greater than minimum price");
      }
      return true;
    }),
];

// Rate limiting validation helper
export const validateRateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  return (req, res, next) => {
    // This is a placeholder for rate limiting logic
    // You can implement actual rate limiting here using express-rate-limit
    next();
  };
};

// Sanitize input to prevent XSS
export const sanitizeInput = (req, res, next) => {
  const sanitizeObj = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        // Basic XSS prevention - remove script tags and dangerous characters
        obj[key] = obj[key]
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
          .replace(/javascript:/gi, "")
          .replace(/on\w+\s*=/gi, "");
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        sanitizeObj(obj[key]);
      }
    }
  };

  if (req.body) sanitizeObj(req.body);
  if (req.query) sanitizeObj(req.query);
  if (req.params) sanitizeObj(req.params);

  next();
};

// Wishlist validation
export const validateWishlistInput = [
  body("courseId")
    .notEmpty()
    .withMessage("Course ID is required")
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Invalid course ID format");
      }
      return true;
    }),

  body("notes")
    .optional()
    .isLength({ max: 500 })
    .trim()
    .withMessage("Notes must not exceed 500 characters"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Priority must be either low, medium, or high"),

  handleValidationErrors,
];

// Bulk wishlist validation
export const validateBulkWishlistInput = [
  body("courseIds")
    .isArray({ min: 1, max: 20 })
    .withMessage("Course IDs must be an array with 1-20 items"),

  body("courseIds.*").custom((value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error("Invalid course ID format");
    }
    return true;
  }),

  handleValidationErrors,
];

// Enrollment validation
export const validateEnrollmentInput = [
  body("courseId")
    .notEmpty()
    .withMessage("Course ID is required")
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Invalid course ID format");
      }
      return true;
    }),

  body("paymentMethod")
    .optional()
    .isIn(["free", "paid", "coupon"])
    .withMessage("Payment method must be free, paid, or coupon"),

  body("couponCode")
    .optional()
    .isLength({ min: 3, max: 20 })
    .trim()
    .withMessage("Coupon code must be between 3 and 20 characters"),

  handleValidationErrors,
];

// Enrollment update validation
export const validateEnrollmentUpdate = [
  body("status")
    .optional()
    .isIn(["active", "completed", "cancelled", "paused"])
    .withMessage("Status must be active, completed, cancelled, or paused"),

  body("progress")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("Progress must be between 0 and 100"),

  body("lastAccessedAt")
    .optional()
    .isISO8601()
    .withMessage("Last accessed date must be a valid ISO 8601 date"),

  handleValidationErrors,
];
