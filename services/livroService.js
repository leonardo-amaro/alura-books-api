const fs = require("fs");

const livros = JSON.parse(fs.readFileSync("livros.json"));

function getListaLivros() {
  return livros;
}

function getLivroId(id) {
  if (id && Number(id)) return livros.find(
    (livro) => livro.id === Number(id)
  );
}

module.exports = {
  getListaLivros,
  getLivroId
}