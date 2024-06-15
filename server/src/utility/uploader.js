const multer = require("multer");
const path = require("path");

function fileUploaderObj(subFolder, allowedFileType) {
  const uploadFolder = (`${__dirname}/../../public/${subFolder}`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
      const extName = path.extname(file.originalname);
      const name =
        file.originalname
          .replace(extName, "")
          .toLowerCase()
          .replace(/\s/g, "-") +
        "-" +
        Date.now();
      cb(null, name + extName);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (allowedFileType.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('This file type is not allowed'));
      }
    },
  });
  return upload;
}

module.exports = fileUploaderObj;
