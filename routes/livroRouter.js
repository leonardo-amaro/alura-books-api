const { Router } = require("express");
const { getTodosLivros } = require("../controllers/livroController");

const router = Router();

router.get("/", getTodosLivros);

module.exports = router;