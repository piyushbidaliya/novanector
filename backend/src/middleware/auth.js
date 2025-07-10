import jwt from "jsonwebtoken";
import Auth from "../models/authModel.js";

// Verify JWT token and authenticate user
export const isAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.cookies?.token ||
      req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
        error: "NO_TOKEN",
      });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from database
      const user = await Auth.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Token is valid but user not found.",
          error: "USER_NOT_FOUND",
        });
      }

      // Check if user account is active
      if (user.status && user.status === "inactive") {
        return res.status(401).json({
          success: false,
          message: "Account is inactive. Please contact support.",
          error: "ACCOUNT_INACTIVE",
        });
      }

      // Attach user to request object
      req.user = user;
      next();
    } catch (tokenError) {
      if (tokenError.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Token has expired. Please login again.",
          error: "TOKEN_EXPIRED",
        });
      } else if (tokenError.name === "JsonWebTokenError") {
        return res.status(401).json({
          success: false,
          message: "Invalid token format.",
          error: "INVALID_TOKEN",
        });
      } else {
        throw tokenError;
      }
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication failed due to server error.",
      error: "AUTH_SERVER_ERROR",
    });
  }
};

// Check if user is admin
export const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
        error: "NO_USER",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
        error: "ADMIN_REQUIRED",
      });
    }

    next();
  } catch (error) {
    console.error("Admin authorization error:", error);
    return res.status(500).json({
      success: false,
      message: "Authorization failed due to server error.",
      error: "AUTH_SERVER_ERROR",
    });
  }
};

// Check if user is instructor
export const isInstructor = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
        error: "NO_USER",
      });
    }

    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Instructor privileges required.",
        error: "INSTRUCTOR_REQUIRED",
      });
    }

    next();
  } catch (error) {
    console.error("Instructor authorization error:", error);
    return res.status(500).json({
      success: false,
      message: "Authorization failed due to server error.",
      error: "AUTH_SERVER_ERROR",
    });
  }
};

// Check if user is student
export const isStudent = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
        error: "NO_USER",
      });
    }

    if (req.user.role !== "student" && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Student privileges required.",
        error: "STUDENT_REQUIRED",
      });
    }

    next();
  } catch (error) {
    console.error("Student authorization error:", error);
    return res.status(500).json({
      success: false,
      message: "Authorization failed due to server error.",
      error: "AUTH_SERVER_ERROR",
    });
  }
};

// Check if user is instructor or admin (instructor+)
export const isInstructorOrAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
        error: "NO_USER",
      });
    }

    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Instructor or Admin privileges required.",
        error: "INSTRUCTOR_OR_ADMIN_REQUIRED",
      });
    }

    next();
  } catch (error) {
    console.error("Instructor/Admin authorization error:", error);
    return res.status(500).json({
      success: false,
      message: "Authorization failed due to server error.",
      error: "AUTH_SERVER_ERROR",
    });
  }
};

// Check multiple roles (flexible role checker)
export const hasRole = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required.",
          error: "NO_USER",
        });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: `Access denied. Required roles: ${allowedRoles.join(", ")}`,
          error: "INSUFFICIENT_ROLE",
        });
      }

      next();
    } catch (error) {
      console.error("Role authorization error:", error);
      return res.status(500).json({
        success: false,
        message: "Authorization failed due to server error.",
        error: "AUTH_SERVER_ERROR",
      });
    }
  };
};

// Check if user owns the resource or is admin
export const isOwnerOrAdmin = (resourceUserField = "user") => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required.",
          error: "NO_USER",
        });
      }

      // Admin can access everything
      if (req.user.role === "admin") {
        return next();
      }

      // Check if user owns the resource
      const resourceUserId =
        req.params.userId || req.params.id || req.body[resourceUserField];

      if (req.user._id.toString() === resourceUserId) {
        return next();
      }

      return res.status(403).json({
        success: false,
        message: "Access denied. You can only access your own resources.",
        error: "OWNERSHIP_REQUIRED",
      });
    } catch (error) {
      console.error("Ownership authorization error:", error);
      return res.status(500).json({
        success: false,
        message: "Authorization failed due to server error.",
        error: "AUTH_SERVER_ERROR",
      });
    }
  };
};

// Optional authentication (doesn't fail if no token)
export const optionalAuth = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.cookies?.token ||
      req.header("x-auth-token");

    if (!token) {
      req.user = null;
      return next();
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Auth.findById(decoded.id).select("-password");

      req.user = user || null;
    } catch (tokenError) {
      req.user = null;
    }

    next();
  } catch (error) {
    console.error("Optional authentication error:", error);
    req.user = null;
    next();
  }
};
