import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
  },
  lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
  },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    createdAt: {type: Date, default: Date.now},
    image: {type: String, default: ""}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;