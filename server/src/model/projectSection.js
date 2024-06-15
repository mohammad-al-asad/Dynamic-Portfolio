const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  project: {
    type: String,
    required: true,
  },
});

const projectSection = mongoose.model("projectSection", schema);

module.exports = projectSection;
