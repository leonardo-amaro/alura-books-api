const express = require("express");
const app = express();
const porta = 8000;

app.get("/", (req, res) => {
  res.send("alura-books-api");
});

app.listen(porta, () => console.log(`Ouvindo a porta ${porta}`));
