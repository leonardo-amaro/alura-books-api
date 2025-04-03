const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("alura-books-api");
});

module.exports = router;