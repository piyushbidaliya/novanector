import express from "express";
import {
  addCourseToCart,
  getCartByUserId,
  updateCourseQuantityInCart,
  deleteCourseFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

// Test route to verify cart routes are working
router.get("/test", (req, res) => {
  res.json({
    message: "Cart routes are working",
    endpoints: [
      "GET /api/cart - Get cart by user ID",
      "POST /api/cart/add-to-cart - Add course to cart",
      "PUT /api/cart/update-quantity - Update course quantity",
      "DELETE /api/cart/remove-course - Remove course from cart",
    ],
  });
});

// Cart routes
router.get("/", getCartByUserId);
router.post("/add-to-cart", addCourseToCart);
router.put("/update-quantity", updateCourseQuantityInCart);
router.delete("/remove-course", deleteCourseFromCart);

export default router;
