const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  technologies: [
    {
      type: String,
      required: true,
    },
  ],
  education: {
    type: String,
    required: true,
    trim: true,
  },
  skill: {
    type: String,
    required: true,
    trim: true,
  },
  passion: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const aboutSection = mongoose.model("aboutSection", schema);

module.exports = aboutSection;
