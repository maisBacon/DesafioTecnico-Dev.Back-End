const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();
mongoose.connect(
  "mongodb+srv://stws:stws@cluster0-4gxnb.mongodb.net/stws?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
server.use(express.json());
server.use(routes);

server.listen(3333);
