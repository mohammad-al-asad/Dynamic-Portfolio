const fs = require("fs");
const path = require("path");

function deleteFiles(subFolder, except) {
  const directory = path.join(`${__dirname}/../../public/${subFolder}`);
  fs.readdir(directory, (error, files) => {
    if (error) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      for (const file of files) {
        if(file!=except){
          fs.unlink(path.join(directory, file), (error) => {
            if (error) {
              res.status(500).json({
                error: error.message,
              });
            }
          });
        }
      }
    }
  });
}

module.exports = deleteFiles;
