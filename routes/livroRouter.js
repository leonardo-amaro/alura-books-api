const { Router } = require("express");
const { getTodosLivros, getLivro } = require("../controllers/livroController");

const router = Router();

router.get("/", getTodosLivros);
router.get("/:id", getLivro);

module.exports = router;