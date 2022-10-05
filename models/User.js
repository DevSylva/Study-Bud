const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
      min: 2,
      max: 50,
    },
    first_name: {
      type: String,
      uppercase: true,
      required: true,
      min: 2,
      max: 50,
    },
    last_name: {
      String,
      uppercase: true,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      String,
      lowercase: true,
      required: true,
    },
    bio: {
      type: String,
      min: 5,
      max: 150,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);