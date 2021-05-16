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
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Faculty", facultySchema);
