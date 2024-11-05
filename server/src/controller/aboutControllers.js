const fileUploaderObj = require("../utility/uploader.js");
const deleteFiles = require("../utility/deleteFiles.js");
const aboutSection = require("../model/aboutSection.js");
const deleteFile = require("../utility/deleteFile.js");
const { default: mongoose } = require("mongoose");

function aboutUploader(req, res, next) {
  const upload = fileUploaderObj("About-Image", [
    "image/png",
    "image/jpg",
    "image/jpeg",
  ]);
  upload.single("about")(req, res, (error) => {
    if (error) {
      res.status(400).json({
        error: error.message,
      });
    } else {
      next();
    }
  });
}

async function aboutController(req, res, next) {
  const aboutObj = {
    technologies: JSON.parse(req.body.technologies),
    education: req.body.education,
    skill: req.body.skill,
    passion: req.body.passion,
    about: req.file.filename,
  };
  try {
    await aboutSection.findByIdAndUpdate(new mongoose.Types.ObjectId("66938a847b6ebd605f3845de"),aboutObj);
    deleteFiles("About-Image", req.file.filename);
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

module.exports = { aboutController, aboutUploader };
