const { getListaLivros, getLivroId } = require("../services/livroService");

function getTodosLivros(req, res) {
  try {
    res.send(getListaLivros());
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    if (getLivroId(req.params.id)) {
      res.send(getLivroId(req.params.id));
    } else {
      throw new Error("Este livro não foi encontrado ou não existe...");
    }
  } catch (error) {
    res.status(404);
    res.send(error.message);
  }
}

module.exports = {
  getTodosLivros,
  getLivro
}