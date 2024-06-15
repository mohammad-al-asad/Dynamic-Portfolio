const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  professions: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    trim: true,
  },
  hero: {
    type: String,
    required: true,
  },
});

const heroSection = mongoose.model("heroSection", schema);

module.exports = heroSection;
