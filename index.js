"use strict";

const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Eu sou Full Cycle");
});

app.listen(PORT, HOST);
console.log(`Running on http://8080:0.0.0.0}`);
