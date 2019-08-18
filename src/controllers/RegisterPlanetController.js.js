const PlanetModel = require("../model/Planet");
const axios = require("axios");

module.exports = {
  async Register(req, res) {
    const { nome, clima, terreno } = req.body;
    const PlanetExists = await PlanetModel.findOne({ name: nome });
    if (PlanetExists) {
      return res.json(PlanetExists);
    }
    const response = await axios.get(
      `https://swapi.co/api/planets/?search=${nome}`
    );

    const { climate, terrain, films } = response.data.results[0];

    const filmsCount = films.length;

    const data = PlanetModel.create({
      name: nome,
      climate: clima,
      terrain: terreno,
      films: filmsCount
    });
    return res.json(data);
  }
};
