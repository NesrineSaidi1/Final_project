const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
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
  isAdmin: {
    type: Boolean,
    default: false,
    
  },
});

module.exports = mongoose.model("user", UserSchema);
