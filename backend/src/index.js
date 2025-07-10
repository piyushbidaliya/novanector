import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import dbConnect from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import testRoutes from "./routes/testRoutes.js";

// ES6 modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables and connect to database
dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("combined"));

// Static file serving for uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(
  "/uploads/instructor-images",
  express.static(path.join(__dirname, "../uploads/instructor-images"))
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/test", testRoutes);

// Health check
app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
