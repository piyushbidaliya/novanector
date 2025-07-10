import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
      unique: true, // One wishlist per user
    },
    courses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
        priority: {
          type: String,
          enum: ["low", "medium", "high"],
          default: "medium",
        },
        notes: {
          type: String,
          maxlength: 500,
        },
      },
    ],
    isPublic: {
      type: Boolean,
      default: false, // Private by default
    },
    name: {
      type: String,
      default: "My Wishlist",
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate courses in the same wishlist
wishlistSchema.index(
  { user: 1, "courses.course": 1 },
  { unique: true, sparse: true }
);

// Method to add course to wishlist
wishlistSchema.methods.addCourse = function (
  courseId,
  priority = "medium",
  notes = ""
) {
  const existingCourse = this.courses.find(
    (item) => item.course.toString() === courseId.toString()
  );

  if (existingCourse) {
    throw new Error("Course already exists in wishlist");
  }

  this.courses.push({
    course: courseId,
    priority,
    notes,
    addedAt: new Date(),
  });

  return this.save();
};

// Method to remove course from wishlist
wishlistSchema.methods.removeCourse = function (courseId) {
  this.courses = this.courses.filter(
    (item) => item.course.toString() !== courseId.toString()
  );

  return this.save();
};

// Method to update course priority
wishlistSchema.methods.updateCoursePriority = function (courseId, priority) {
  const course = this.courses.find(
    (item) => item.course.toString() === courseId.toString()
  );

  if (!course) {
    throw new Error("Course not found in wishlist");
  }

  course.priority = priority;
  return this.save();
};

// Get courses count
wishlistSchema.virtual("coursesCount").get(function () {
  return this.courses.length;
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
