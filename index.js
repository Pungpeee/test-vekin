const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello, Pungpeee the cutest girl");
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log("Listening on port 80 ja");
});
