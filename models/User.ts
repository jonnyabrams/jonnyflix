import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      maxlength: 60,
    },
    image: {
      type: String,
    },
    googleId: {
      type: String,
    },
    githubId: {
      type: String,
    },
    emailVerified: {
      type: Date,
    },
    password: {
      type: String,
    },
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
    favoriteIds: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
