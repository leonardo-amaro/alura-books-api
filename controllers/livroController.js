function getTodosLivros(req, res) {
  try {
    res.send("alura-books-api");
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