//need to change this to suit FACULTY

const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: false,
  },
  email: {
    type: String, //email type?
    required: false,
  },
  number: {
    type: Number, //phone number type?
    required: false,
  },
});

module.exports = mongoose.model("Faculty", facultySchema);
