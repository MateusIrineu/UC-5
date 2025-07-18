import express from "express";
// import { configDotenv } from "dotenv"
import CriarTabelas from "./src/config/criartabela.js";
import routeProduto from "./src/modules/produto/routes/produto.route.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORTA

app.use(express.json())
app.use(routeProduto)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});