import express from "express";
import {
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  updateWishlistSettings,
  getPublicWishlists,
  checkCourseInWishlist,
} from "../controllers/wishlistController.js";
import { isAuthenticated, isAdmin, isStudent } from "../middleware/auth.js";
import {
  validateObjectId,
  validateWishlistInput,
} from "../middleware/validation.js";

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Wishlist routes working!",
    endpoints: [
      "POST /add - Add course to wishlist",
      "DELETE /remove/:courseId - Remove course from wishlist",
      "GET /my-wishlist - Get user's wishlist",
      "DELETE /clear - Clear wishlist",
      "PUT /settings - Update wishlist settings",
      "GET /check/:courseId - Check if course in wishlist",
      "GET /public - Get public wishlists",
    ],
  });
});

// Add course to wishlist
router.post(
  "/add",
  isAuthenticated,
  isStudent,
  validateWishlistInput,
  addToWishlist
);

// Remove course from wishlist
router.delete(
  "/remove/:courseId",
  isAuthenticated,
  isStudent,
  validateObjectId("courseId"),
  removeFromWishlist
);

// Get user's wishlist
router.get(
  "/my-wishlist",
  isAuthenticated,
  isStudent,
  (req, res, next) => {
    req.params.userId = req.user._id.toString();
    next();
  },
  getUserWishlist
);

// Clear wishlist
router.delete("/clear", isAuthenticated, isStudent, clearWishlist);

// Update wishlist settings
router.put("/settings", isAuthenticated, isStudent, updateWishlistSettings);

// Check if course is in wishlist
router.get(
  "/check/:courseId",
  isAuthenticated,
  isStudent,
  validateObjectId("courseId"),
  checkCourseInWishlist
);

// Get public wishlists
router.get("/public", getPublicWishlists);

// Admin: Get any user's wishlist
router.get(
  "/user/:userId",
  isAuthenticated,
  isAdmin,
  validateObjectId("userId"),
  getUserWishlist
);

export default router;
