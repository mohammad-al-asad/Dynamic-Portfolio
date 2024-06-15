const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  CV: {
    type: String,
    required: true,
  },
});

const CvModel = mongoose.model("CvModel", schema);

module.exports = CvModel;