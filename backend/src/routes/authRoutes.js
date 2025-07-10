import express from "express";
import {
  createAuth,
  deleteUserById,
  getAllUser,
  getUserById,
  loginAuth,
  updatedUserProfile,
} from "../controllers/authController.js";
import { uploadProfilePicture, handleMulterError } from "../config/multer.js";
import multer from "multer";

// Parse form-data without files (for login endpoint)
const parseFormData = multer().none();

const router = express.Router();

// Handle both JSON and form-data for login
const handleLoginData = (req, res, next) => {
  const contentType = req.get("content-type");

  if (contentType && contentType.includes("multipart/form-data")) {
    parseFormData(req, res, next);
  } else {
    next();
  }
};

// Test route
router.get("/", (req, res) => {
  res.send("Auth route is working");
});

// Authentication routes
router.post("/register", uploadProfilePicture, handleMulterError, createAuth);
router.post("/login", handleLoginData, loginAuth);

// User management routes
router.get("/getall", getAllUser);
router.get("/one/:id", getUserById);
router.delete("/delete/:id", deleteUserById);
router.put("/update/:id", updatedUserProfile);

export default router;
