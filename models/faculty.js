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
    type: String, //type should be like enums (define types beforehand)??
    required: true,
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
