const PlanetModel = require("../model/Planet");

module.exports = {
  async Delete(req, res) {
    const { name } = req.body;
    PlanetModel.deleteOne({ name: name }, function() {});
    return res.json("excluido");
  }
};
