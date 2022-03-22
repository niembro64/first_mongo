// const SundaeController = require("../controllers/sundae.model");
const SundaeController = require("../controllers/sundae.controller");

module.exports = (app) => {
  app.get("/api", SundaeController.eric);
  app.get("/api/test", SundaeController.testResponse);
  app.get("/api/findAll", SundaeController.findAll)
};