const PlanetModel = require("../model/Planet");

module.exports = {
  async List(req, res) {
    PlanetModel.find({}, function(err, planets) {
      res.json(planets);
    });
  }
};
