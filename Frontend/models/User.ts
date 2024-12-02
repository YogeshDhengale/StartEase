import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    mobile: { type: String, unique: true, required: true },
    name: {type: String, required: true},
    password: { type: String, required: true },
    tenantId: { type: String, unique: true },
    photoURL: {type: String},
    role: {
      type: String,
      enum: ["account_owner", "admin", "super_admin", "creater", "read_only"],
      default: "account_owner",
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
