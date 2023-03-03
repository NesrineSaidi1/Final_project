const mongoose = require("mongoose");
const schema = mongoose.Schema;
// nasna3 fi din om stage
const internshipSchema = new schema({
  UserName:{String},
  Entityname: { String },
  internshipname: {
    type: String,
  },
  Domain: {
    type: String,
  },
  Duration: {
    type: String,
  },
  Post_av: {
    type: String,
  },
  Salary: {
    type: String,
  },
  Location: {
    type: String,
  },
  Description: {
    type: String,
  },
  isPaid: {
    type: String,
  },
  Timing: {
    type: String,
  },

  img: {
    type: String,
  },
});
const Internship = mongoose.model("internship", internshipSchema);
module.exports = Internship;
