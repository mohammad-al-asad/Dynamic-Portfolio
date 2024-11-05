const fileUploaderObj = require("../utility/uploader.js");
const deleteFiles = require("../utility/deleteFiles.js");
const deleteFile = require("../utility/deleteFile.js");
const CvModel = require("../model/CvModel.js");
const { default: mongoose } = require("mongoose");

function CvUploader(req, res, next) {
  const upload = fileUploaderObj("CV", ["application/pdf"]);
  upload.single("CV")(req, res, (error) => {
    if (error) {
      res.status(400).json({
        error: error.message,
      });
    } else {
      next();
    }
  });
}

async function CvController(req, res, next) {
  try {
    await CvModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId("6728e7e55682b59672283f51"),
      { CV: req.file.filename }
    );
    deleteFiles(`CV`, req.file.filename);
    res.json({
      success: "Applied Sccesfully",
    });
  } catch (error) {
    deleteFile(`CV/${req.file.filename}`);
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { CvController, CvUploader };
