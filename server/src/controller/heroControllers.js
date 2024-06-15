const fileUploaderObj = require("../utility/uploader.js");
const deleteFiles = require("../utility/deleteFiles.js");

function heroUploader(req, res, next) {
  deleteFiles("Hero-Image");
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
    await heroSection.create(heroObj);
    res.json({
      success: "Applied Sccesfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { heroController, heroUploader };
