import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 500, // Increased for better descriptions
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth", // Changed to match your user model
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Digital Marketing",
        "Web Development",
        "Data Science",
        "Business Analytics",
        "Graphics Design",
        "Java Fullstack",
        "Mobile Development",
        "DevOps",
        "Cybersecurity",
      ],
    },
    duration: {
      type: Number,
      default: 0,
      validate: {
        validator: function (v) {
          return v >= 0 && v <= 24; // Extended to 24 months
        },
        message: (props) => `${props.value} is not a valid duration!`,
      },
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    discountedPrice: {
      type: Number,
      default: 0,
      validate: {
        validator: function (v) {
          return v >= 0 && v <= this.price;
        },
        message: (props) =>
          `Discounted price ${props.value} cannot be greater than original price!`,
      },
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    language: {
      type: String,
      default: "English",
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    studentsEnrolled: {
      type: Number,
      default: 0,
      min: 0,
    },
    maxStudents: {
      type: Number,
      default: 100,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    curriculum: {
      type: String,
      required: true,
    },
    thumbnailImage: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return (
            /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(v) ||
            /^.*\.(png|jpg|jpeg|gif|webp)$/i.test(v)
          );
        },
        message: (props) =>
          `${props.value} is not a valid image URL or file path!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
