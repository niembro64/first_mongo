// const SundaeController = require("../controllers/sundae.model");
const SundaeController = require("../controllers/sundae.controller");

module.exports = (app) => {
  app.get("/api/test", SundaeController.testResponse);
};