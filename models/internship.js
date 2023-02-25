const mongoose = require("mongoose");
const schema = mongoose.Schema;
// nasna3 fi din om stage
const internshipSchema = new schema({
  id_Entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
    required: true,
  },
  Domain: {
    type: String,
    required: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  Post_av: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  Timing: {
    type: String,
    required: true,
  },
});
const Internship = mongoose.model("internship", internshipSchema);
module.exports = Internship;
