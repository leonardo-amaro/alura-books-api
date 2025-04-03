function getTodosLivros(req, res) {
  try {
    res.send("alura-books-api");
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

module.exports = {
  getTodosLivros
}