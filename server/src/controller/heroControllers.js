const fileUploaderObj = require("../utility/uploader.js");
const deleteFiles = require("../utility/deleteFiles.js");
const heroSection = require("../model/heroSection.js");
const deleteFile = require("../utility/deleteFile.js");
const { default: mongoose } = require("mongoose");

function heroUploader(req, res, next) {
  const upload = fileUploaderObj("Hero-Image", [
    "image/png",
    "image/jpg",
    "image/jpeg",
  ]);
  upload.single("hero")(req, res, (error) => {
    if (error) {
      res.status(400).json({
        error: error.message,
      });
    } else {
      next();
    }
  });
}

async function heroController(req, res, next) {
  const heroObj = {
    professions: JSON.parse(req.body.professions),
    description: req.body.description,
    hero: req.file.filename,
  };
  try {
    await heroSection.findByIdAndUpdate(
      new mongoose.Types.ObjectId("6693876b7b6ebd605f3845b0"),
      heroObj
    );
    deleteFiles("Hero-Image", req.file.filename);
    res.json({
      success: "Applied Sccesfully",
    });
  } catch (error) {
    deleteFile(req.file.filename);
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { heroController, heroUploader };
