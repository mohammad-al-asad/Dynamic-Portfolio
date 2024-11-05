const fs = require("fs");
const path = require("path");

function deleteFile(file) {
  const fileName = path.join(`${__dirname}/../../public/${file}`);
  fs.unlink(fileName, (error) => {
    if (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  })
}

module.exports = deleteFile;
