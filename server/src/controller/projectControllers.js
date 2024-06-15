const fileUploaderObj = require("../utility/uploader.js");
const projectSection = require("../model/projectSection.js");

function projectUploader(req, res, next) {
    const upload = fileUploaderObj("Project-Image", [
      "image/png",
      "image/jpg",
      "image/jpeg",
    ]);
    upload.single("project")(req, res, (error) => {
      if (error) {
        res.status(400).json({
          error: error.message,
        });
      } else {
        next();
      }
    });
  }
  
async function projectController(req, res, next) {
const projectObj = {
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    project: req.file.filename,
};
try {
    await projectSection.create(projectObj);
    res.json({
    success: "Applied Sccesfully",
    });
} catch (error) {
    res.status(400).json({
    error: error.message,
    });
}
}

module.exports = { projectController, projectUploader };
