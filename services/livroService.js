const fs = require("fs");

const livros = JSON.parse(fs.readFileSync("livros.json"));

function getListaLivros() {
  return livros;
}

function getLivroId(id) {
  return livros.find(
    (livro) => livro.id == id
  );
}

module.exports = {
  getListaLivros,
  getLivroId
}