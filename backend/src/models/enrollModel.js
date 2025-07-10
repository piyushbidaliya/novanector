import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    completionDate: {
      type: Date,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    status: {
      type: String,
      enum: ["active", "completed", "dropped", "paused", "pending"],
      default: "active",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "debit_card", "paypal", "stripe", "bank_transfer"],
    },
    transactionId: {
      type: String,
    },
    amountPaid: {
      type: Number,
      default: 0,
      min: 0,
    },
    discountApplied: {
      type: Number,
      default: 0,
      min: 0,
    },
    couponUsed: {
      type: String,
    },
    certificate: {
      issued: {
        type: Boolean,
        default: false,
      },
      issuedDate: {
        type: Date,
      },
      certificateId: {
        type: String,
      },
    },
    lastAccessDate: {
      type: Date,
      default: Date.now,
    },
    totalTimeSpent: {
      type: Number, // in minutes
      default: 0,
    },
    notes: {
      type: String,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure a student can't enroll in the same course twice
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

// Update last access date on save
enrollmentSchema.pre("save", function (next) {
  this.lastAccessDate = new Date();
  next();
});

// Calculate completion percentage
enrollmentSchema.methods.updateProgress = function (
  completedLessons,
  totalLessons
) {
  if (totalLessons > 0) {
    this.progress = Math.round((completedLessons / totalLessons) * 100);
    if (this.progress >= 100 && this.status === "active") {
      this.status = "completed";
      this.completionDate = new Date();
    }
  }
  return this.save();
};

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;
