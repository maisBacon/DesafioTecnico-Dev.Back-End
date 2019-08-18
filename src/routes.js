const express = require("express");
const routes = express.Router();
const PlanetController = require("./controllers/PlanetController");

routes.post("/planet", PlanetController.Register);
routes.get("/planet/name", PlanetController.SearchName);
routes.get("/planet/id", PlanetController.SearchId);
routes.get("/planet/list", PlanetController.List);
routes.delete("/planet/delete", PlanetController.Delete);

module.exports = routes;
