import Wishlist from "../models/wishlistModel.js";
import Course from "../models/courseModel.js";
import Enrollment from "../models/enrollModel.js";

// Get user's wishlist
export const getUserWishlist = async (req, res) => {
  try {
    const userId = req.params.userId || req.user._id;

    let wishlist = await Wishlist.findOne({ user: userId }).populate(
      "courses.course",
      "title price discountedPrice rating thumbnailImage"
    );

    if (!wishlist) {
      wishlist = await Wishlist.create({ user: userId, courses: [] });
    }

    return res.status(200).json({
      success: true,
      message: "Wishlist retrieved successfully",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch wishlist",
      error: error.message,
    });
  }
};

// Add course to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if already enrolled
    const enrollment = await Enrollment.findOne({
      student: userId,
      course: courseId,
    });

    if (enrollment) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course",
      });
    }

    // Find or create wishlist
    let wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: userId, courses: [] });
    }

    // Check if already in wishlist
    const exists = wishlist.courses.some(
      (item) => item.course.toString() === courseId
    );

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Course already in wishlist",
      });
    }

    // Add to wishlist
    wishlist.courses.push({ course: courseId });
    await wishlist.save();

    return res.status(201).json({
      success: true,
      message: "Course added to wishlist",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add course to wishlist",
      error: error.message,
    });
  }
};

// Remove course from wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    // Remove course
    wishlist.courses = wishlist.courses.filter(
      (item) => item.course.toString() !== courseId
    );

    await wishlist.save();

    return res.status(200).json({
      success: true,
      message: "Course removed from wishlist",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove course from wishlist",
      error: error.message,
    });
  }
};

// Clear entire wishlist
export const clearWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    await Wishlist.findOneAndUpdate(
      { user: userId },
      { courses: [] },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Wishlist cleared successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to clear wishlist",
      error: error.message,
    });
  }
};

// Check if course is in wishlist
export const checkCourseInWishlist = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const wishlist = await Wishlist.findOne({ user: userId });

    const inWishlist =
      wishlist?.courses.some((item) => item.course.toString() === courseId) ||
      false;

    return res.status(200).json({
      success: true,
      inWishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to check wishlist",
      error: error.message,
    });
  }
};

// Update wishlist settings
export const updateWishlistSettings = async (req, res) => {
  try {
    const { isPublic } = req.body;
    const userId = req.user._id;

    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { isPublic: isPublic || false },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "Wishlist settings updated",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update wishlist settings",
      error: error.message,
    });
  }
};

// Get public wishlists
export const getPublicWishlists = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const wishlists = await Wishlist.find({ isPublic: true })
      .populate("user", "username")
      .populate("courses.course", "title price thumbnailImage")
      .skip(skip)
      .limit(Number(limit));

    return res.status(200).json({
      success: true,
      message: "Public wishlists retrieved",
      wishlists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch public wishlists",
      error: error.message,
    });
  }
};
