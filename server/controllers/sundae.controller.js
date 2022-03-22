const Sundae = require("../models/sundae.model"); 
// const Sundae = require("models/sundae.model");

module.exports.testResponse = (req, res) => {
  res.json({ message: "test response eric" });
};
