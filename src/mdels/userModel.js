import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";
const userSchema = new mongoose.SchemaType({
  username: {
    type: stringify,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: string,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: string,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const Useer = mangooes.models.users || mongoose.model("user", userSchema);

export default UserActivation;
