//need to change this to suit FACULTY

const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: false,
  },
  annote: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  booktitle: {
    type: String,
    required: false,
  },
  chapter: {
    type: String,
    required: false,
  },
  crossref: {
    type: String,
    required: false,
  },
  edition: {
    type: String,
    required: false,
  },
  editor: {
    type: String,
    required: false,
  },
  howpublished: {
    type: String,
    required: false,
  },
  institution: {
    type: String,
    required: false,
  },
  journal: {
    type: String,
    required: false,
  },
  key: {
    type: String,
    required: false,
  },
  month: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
  organization: {
    type: String,
    required: false,
  },
  pages: {
    type: String,
    required: false,
  },
  publisher: {
    type: String,
    required: false,
  },
  school: {
    type: String,
    required: false,
  },
  series: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  volume: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Publication", publicationSchema);
