const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const { heroController } = require("./src/controller/heroControllers.js");
const { heroUploader } = require("./src/controller/heroControllers.js");
const { aboutController } = require("./src/controller/aboutControllers.js");
const { aboutUploader } = require("./src/controller/aboutControllers.js");
const { CvController } = require("./src/controller/CvControllers.js");
const { CvUploader } = require("./src/controller/CvControllers.js");
const { projectController } = require("./src/controller/projectControllers.js");
const { projectUploader } = require("./src/controller/projectControllers.js");
const portfolioController = require("./src/controller/portfolioControllers.js");
const loginController = require("./src/controller/loginControllers.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`The server is live: http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.put("/portfolio/hero", heroUploader, heroController);
app.put("/portfolio/about", aboutUploader, aboutController);
app.put("/portfolio/CV", CvUploader, CvController);
app.put("/portfolio/project", projectUploader, projectController);

app.post("/login", loginController);
app.get("/portfolio", portfolioController);
