import express from "express";
// import { configDotenv } from "dotenv"
// import CriarTabelas from "./src/config/criartabela.js";
import routeProduto from "./src/modules/produto/routes/produto.route.js";
import dotenv from "dotenv";

import "./src/config/database.js";

dotenv.config()

const app = express();
const port = process.env.PORTA

app.use(express.json())
app.use(routeProduto)

app.listen(port, async () => {

    try {
        console.log(`Servidor rodando na porta ${port}`);
    } catch (error) {
        console.log('Erro ao abrir o servidor', error = error.message)
    }
});