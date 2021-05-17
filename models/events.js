
/*

    // Events Model
    // Fields: created, start, finish, name, type, description

*/
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: false,
    },
    finish: {
      type: Date,
      required: false,
    },
  });
  
  module.exports = mongoose.model("Event", eventSchema);