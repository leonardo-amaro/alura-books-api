const fs = require("fs");

function getListaLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

module.exports = {
  getListaLivros
}