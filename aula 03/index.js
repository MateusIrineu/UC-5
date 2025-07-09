import express from "express";
import { configDotenv } from "dotenv"

import routeproduto from "./src/modules/produto/routes/produto.route";

const port = process.env.PORTA