const PlanetModel = require("../model/Planet");
const axios = require("axios");

module.exports = {
  async List(req, res) {
    await PlanetModel.find({}, function(err, planets) {
      if (err) {
        console.log(err);
      }
      res.json(planets);
    });
  },
  async SearchName(req, res) {
    const { name } = req.body;
    const data = await PlanetModel.findOne({ name: name }, function(err) {
      if (err) {
        console.log(err);
      }
    });
    return res.json(data);
  },
  async SearchId(req, res) {
    const { id } = req.body;
    await PlanetModel.findById({ _id: id }, function(err, id) {
      if (err) {
        console.log(err);
      }
      res.json(id);
    });
  },
  async Delete(req, res) {
    const { name } = req.body;
    await PlanetModel.deleteOne({ name: name }, function(err) {
      if (err) {
        console.log(err);
      }
    });
    return res.json(`Planet ${name} delete`);
  },
  async Register(req, res) {
    const { nome, clima, terreno } = req.body;
    const PlanetExists = await PlanetModel.findOne({ name: nome }, function(
      err
    ) {
      if (err) {
        console.log(err);
      }
    });
    if (PlanetExists) {
      return res.json(PlanetExists);
    }
    const response = await axios.get(
      `https://swapi.co/api/planets/?search=${nome}`
    );

    const { films } = response.data.results[0];

    const filmsCount = films.length;

    PlanetModel.create({
      name: nome,
      climate: clima,
      terrain: terreno,
      films: filmsCount
    });
    return res.json(`Planet found: ${nome}`);
  }
};
