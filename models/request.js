const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requestSchema = new schema({
  id_Intern: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "internship",
    required: true,
  },
  id_User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  id_Entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
    required: true,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});
const Request = mongoose.model("request", requestSchema);
module.exports = Request;
