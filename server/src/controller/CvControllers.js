const fileUploaderObj = require("../utility/uploader.js");
const deleteFiles = require("../utility/deleteFiles.js");
const CvModel = require("../model/CvModel.js");

function CvUploader(req, res, next) {
    deleteFiles("CV");
    const upload = fileUploaderObj("CV", [
      "application/pdf",
    ]);
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
const CvObj = {
    CV: req.file.filename,
};
try {
    await CvModel.create(CvObj);
    res.json({
    success: "Applied Sccesfully",
    });
} catch (error) {
    res.status(400).json({
    error: error.message,
    });
}
}

module.exports = { CvController, CvUploader };