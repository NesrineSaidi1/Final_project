const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requestSchema = new schema({
  name: String,
  lastname: String,
  age: Number,
  intrenshipname: String,
  entityshipname: String,
  email: String,
  duration: String,
  phonenumber: String,
  diplome: String,
  skills: String,
});
const Request = mongoose.model("request", requestSchema);
module.exports = Request;
