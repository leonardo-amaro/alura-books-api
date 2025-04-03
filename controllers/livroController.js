const { getListaLivros, getLivroId } = require("../services/livroService");

function getTodosLivros(req, res) {
  try {
    res.send(getListaLivros());
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function getLivro(req, res) {
  try {
    res.send(getLivroId(req.params.id));
  } catch (error) {
    res.status(404);
    res.send("Livro não encontrado");
  }
}

module.exports = {
  getTodosLivros,
  getLivro
}