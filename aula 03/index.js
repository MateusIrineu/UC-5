import express from "express";
// import { configDotenv } from "dotenv"
// import CriarTabelas from "./src/config/criartabela.js";
import sequelize from "./src/config/database.js";
import routeProduto from "./src/modules/produto/routes/produto.route.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORTA

app.use(express.json())
app.use(routeProduto)

app.listen(port, async () => {

    try {
        await sequelize.sync({force: true, alter: true})
        console.log('Tabela Criada')
    } catch (error) {
        console.log('Erro')
    }

    console.log(`Servidor rodando na porta ${port}`);
});