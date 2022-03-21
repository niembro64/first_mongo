const SundaeController = require("../controllers/sundae.model");

module.exports = (app) => {
  app.get("/api/test", SundaeController.testResponse);
  
};
