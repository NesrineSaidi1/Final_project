const mongoose = require("mongoose");
const schema = mongoose.Schema;
const EntitySchema = new schema({
  Entity_name: {
    type: String,
    required: true,
  },
  Tax_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },
  isEntity: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Entity", EntitySchema);
