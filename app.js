const express = require("express");
const livroRouter = require("./routes/livroRouter");

const app = express();
app.use("/livros", livroRouter)

const porta = 8000;

app.listen(porta, () => console.log(`Ouvindo a porta ${porta}`));
