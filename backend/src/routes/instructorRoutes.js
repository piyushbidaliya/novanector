import express from "express";
import {
  createInstructor,
  getInstructorById,
  getAllInstructors,
  updateInstructor,
  deleteInstructor,
} from "../controllers/instructorController.js";
import { uploadInstructorImage, handleMulterError } from "../config/multer.js";

const router = express.Router();
// test route to verify instructor routes are working
router.get("/test", (req, res) => {
  res.json({
    message: "Instructor routes are working",
    endpoints: [
      "POST /api/instructors/create-instructor - Create instructor (with optional image)",
      "GET /api/instructors - Get all instructors",
      "GET /api/instructors/:id - Get instructor by ID",
      "PUT /api/instructors/:id - Update instructor (with optional image)",
      "DELETE /api/instructors/:id - Delete instructor",
    ],
  });
});

// Instructor routes
router.post(
  "/create-instructor",
  uploadInstructorImage,
  handleMulterError,
  createInstructor
);
router.get("/instructors", getAllInstructors);
router.get("/instructors/:id", getInstructorById);
router.put(
  "/instructors/:id",
  uploadInstructorImage,
  handleMulterError,
  updateInstructor
);
router.delete("/instructors/:id", deleteInstructor);

export default router;
