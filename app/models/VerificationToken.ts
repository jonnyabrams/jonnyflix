import mongoose from "mongoose";

const VerificationTokenSchema = new mongoose.Schema(
  {
    identifier: {
      type: String,
      unique: true,
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.VerificationToken ||
  mongoose.model("VerificationToken", VerificationTokenSchema);
