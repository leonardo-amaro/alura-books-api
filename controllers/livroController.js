const { getListaLivros } = require("../services/livroService");

function getTodosLivros(req, res) {
  try {
    const livros = getListaLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    res.send(`Livro de ID ${id}`);
  } catch (error) {
    res.status(404);
    res.send("Livro não encontrado");
  }
}

module.exports = {
  getTodosLivros,
  getLivro
}