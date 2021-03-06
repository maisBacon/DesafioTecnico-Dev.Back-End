const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    climate: {
      type: String,
      required: true
    },
    terrain: {
      type: String,
      required: true
    },
    films: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("PlanetModel", PlanetSchema);
