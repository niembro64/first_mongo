const Sundae = require("../models/sundae.model");
// const Sundae = require("models/sundae.model");

module.exports.eric = (req, res) => {
  res.json({ message: "you're here eric" });
};
module.exports.testResponse = (req, res) => {
  res.json({ message: "test response eric" });
};

module.exports.findAll = (req, res) => {
  Sundae.find({})
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
};
