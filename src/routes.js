const express = require("express");
const routes = express.Router();
const SearchPlanetsController = require("./controllers/SearchPlanetController");
const RegisterPlanetsController = require("./controllers/RegisterPlanetController.js");
const ListPlanetsController = require("./controllers/ListPlanetController");
const DeletePlanetController = require("./controllers/DeletePlanetController");

routes.post("/planet", RegisterPlanetsController.Register);
routes.get("/planet/name", SearchPlanetsController.SearchName);
routes.get("/planet/id", SearchPlanetsController.SearchId);
routes.get("/planet/list", ListPlanetsController.List);
routes.delete("/planet/delete", DeletePlanetController.Delete);

module.exports = routes;
