const express = require("express");
const cors = require("cors");
const livroRouter = require("./routes/livroRouter");

const app = express();
app.use(cors());
app.use("/livros", livroRouter);

const porta = 8000;

app.listen(porta, () => console.log(`Ouvindo a porta ${porta}`));
