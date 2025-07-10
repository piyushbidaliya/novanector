import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    validate: {
      validator: function (v) {
        // Allow empty string or valid image URL/path
        return (
          !v ||
          /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(v) ||
          /^.*\.(png|jpg|jpeg|gif|webp)$/i.test(v)
        );
      },
      message: (props) =>
        `${props.value} is not a valid image URL or file path!`,
    },
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;
