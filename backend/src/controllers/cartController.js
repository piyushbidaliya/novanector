import Cart from "../models/cartModel.js";
import mongoose from "mongoose";

// Get user's cart
export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "courses.course",
      "title price thumbnailImage"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({
      message: "Cart retrieved successfully",
      cart,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Add course to cart
export const addCourseToCart = async (req, res) => {
  try {
    const { courseId, quantity = 1 } = req.body;

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid course ID" });
    }

    // Check for duplicates
    const existingCart = await Cart.findOne({
      user: req.user._id,
      "courses.course": courseId,
    });

    if (existingCart) {
      return res.status(400).json({
        message: "Course already in cart",
      });
    }

    // Add course to cart
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { $addToSet: { courses: { course: courseId, quantity } } },
      { new: true, upsert: true }
    ).populate("courses.course", "title price thumbnailImage");

    res.status(200).json({
      message: "Course added to cart successfully",
      cart,
    });
  } catch (error) {
    console.error("Error adding course to cart:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update course quantity
export const updateCourseQuantityInCart = async (req, res) => {
  try {
    const { courseId, quantity } = req.body;

    if (!courseId || !quantity) {
      return res.status(400).json({
        message: "Course ID and quantity are required",
      });
    }

    if (quantity < 1) {
      return res.status(400).json({
        message: "Quantity must be at least 1",
      });
    }

    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id, "courses.course": courseId },
      { $set: { "courses.$.quantity": quantity } },
      { new: true }
    ).populate("courses.course", "title price thumbnailImage");

    if (!cart) {
      return res.status(404).json({
        message: "Cart or course not found",
      });
    }

    res.status(200).json({
      message: "Course quantity updated successfully",
      cart,
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Remove course from cart
export const deleteCourseFromCart = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { $pull: { courses: { course: courseId } } },
      { new: true }
    ).populate("courses.course", "title price thumbnailImage");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({
      message: "Course removed from cart successfully",
      cart,
    });
  } catch (error) {
    console.error("Error removing course from cart:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
