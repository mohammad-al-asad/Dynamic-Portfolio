const { json } = require("express");
const admin = require("../model/admin");
async function loginController(req, res, next) {
  try {
    const result = await admin.findOne({ name: req.body.name });

    if (result.password === req.body.password) {
      res.status(200).send({
        data: JSON.stringify(result.name),
        message: "Login Successfull",
      });
    } else {
      res.status(403).send({
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
}

module.exports = loginController;
