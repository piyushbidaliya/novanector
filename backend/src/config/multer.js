import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";

// Setup directories
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "../../uploads/profile-pictures");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const courseThumbnailsDir = path.join(
  __dirname,
  "../../uploads/course-thumbnails"
);
if (!fs.existsSync(courseThumbnailsDir)) {
  fs.mkdirSync(courseThumbnailsDir, { recursive: true });
}

const instructorImagesDir = path.join(
  __dirname,
  "../../uploads/instructor-images"
);
if (!fs.existsSync(instructorImagesDir)) {
  fs.mkdirSync(instructorImagesDir, { recursive: true });
}

const blogDir = path.join(__dirname, "../../uploads/blog");
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// File validation
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/bmp",
    "image/tiff",
  ];

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".tiff",
  ];

  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (
    allowedMimeTypes.includes(file.mimetype) &&
    allowedExtensions.includes(fileExtension)
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only image files are allowed."), false);
  }
};

// Storage configuration
const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;

    if (file.fieldname === "profilePicture") {
      uploadPath = path.join(__dirname, "../../uploads/profile-pictures");
    } else if (file.fieldname === "thumbnailImage") {
      uploadPath = path.join(__dirname, "../../uploads/course-thumbnails");
    } else if (file.fieldname === "instructorImage") {
      uploadPath = path.join(__dirname, "../../uploads/instructor-images");
    } else if (file.fieldname === "blogDir") {
      uploadPath = path.join(__dirname, "../../uploads/blogDir");
    } else {
      uploadPath = path.join(__dirname, "../../uploads/profile-pictures");
    }

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString("hex");
    const extension = path.extname(file.originalname).toLowerCase();
    const originalName = path
      .parse(file.originalname)
      .name.replace(/[^a-zA-Z0-9]/g, "_")
      .substring(0, 20);

    const filename = `${originalName}-${timestamp}-${randomString}${extension}`;
    cb(null, filename);
  },
});

// Multer configuration
const profilePictureUpload = multer({
  storage: localStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1,
  },
});

// Error handling
const handleMulterError = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    switch (error.code) {
      case "LIMIT_FILE_SIZE":
        return res.status(400).json({
          success: false,
          message: "File size too large. Maximum size allowed is 5MB.",
          error: "FILE_TOO_LARGE",
        });
      case "LIMIT_FILE_COUNT":
        return res.status(400).json({
          success: false,
          message: "Too many files. Only one file is allowed.",
          error: "TOO_MANY_FILES",
        });
      case "LIMIT_UNEXPECTED_FILE":
        return res.status(400).json({
          success: false,
          message:
            "Unexpected field name. Use 'profilePicture', 'thumbnailImage', or 'instructorImage' as field name.",
          error: "UNEXPECTED_FIELD",
        });
      default:
        return res.status(400).json({
          success: false,
          message: "File upload error occurred.",
          error: error.code,
        });
    }
  } else if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      error: "FILE_VALIDATION_ERROR",
    });
  }
  next();
};

// File validation middleware
const validateFile = (req, res, next) => {
  if (req.file && req.file.size === 0) {
    return res.status(400).json({
      success: false,
      message: "Uploaded file is empty. Please upload a valid image file.",
      error: "EMPTY_FILE",
    });
  }
  next();
};

// Upload middleware
const uploadProfilePicture = profilePictureUpload.single("profilePicture");
const uploadCourseThumbnail = profilePictureUpload.single("thumbnailImage");
const uploadInstructorImage = profilePictureUpload.single("instructorImage");
const uploadBlogImage = profilePictureUpload.single("blogImage");
const uploadMultipleImages = profilePictureUpload.array("images", 5);

// Optional upload middleware
const optionalUploadProfilePicture = (req, res, next) => {
  const contentType = req.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return next();
  }

  if (contentType && contentType.includes("multipart/form-data")) {
    return uploadProfilePicture(req, res, next);
  }

  next();
};

// Utility functions
const deleteImageFromLocal = (imagePath) => {
  try {
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};

const getLocalImagePath = (filename) => {
  return path.join(__dirname, "../../uploads/profile-pictures", filename);
};

const extractFilenameFromUrl = (url) => {
  if (!url) return null;
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const generateImageUrl = (req, filename) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  return `${baseUrl}/uploads/profile-pictures/${filename}`;
};

const isValidImageUrl = (url) => {
  const imageUrlRegex =
    /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))$/i;
  return imageUrlRegex.test(url);
};

export {
  uploadProfilePicture,
  uploadCourseThumbnail,
  uploadInstructorImage,
  uploadMultipleImages,
  uploadBlogImage,
  handleMulterError,
  validateFile,
  deleteImageFromLocal,
  getLocalImagePath,
  extractFilenameFromUrl,
  generateImageUrl,
  isValidImageUrl,
  optionalUploadProfilePicture,
};
