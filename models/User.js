const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  User_cv: {
    URL: String,
    required: false,
  },
  category: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("user", UserSchema);
