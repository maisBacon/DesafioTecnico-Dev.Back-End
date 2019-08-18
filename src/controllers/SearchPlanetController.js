const PlanetModel = require("../model/Planet");

module.exports = {
  async SearchName(req, res) {
    const { name } = req.body;
    const data = await PlanetModel.findOne({ name: name });
    return res.json(data);
  },
  async SearchId(req, res) {
    const { id } = req.body;
    PlanetModel.findById({ _id: id }, function(err, id) {
      res.json(id);
    });
  }
};
