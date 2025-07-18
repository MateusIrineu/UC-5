import express from 'express';
import ProdutoController from '../controllers/produto.controller.js';

const router = express.Router()


// Listar todos os produtos
router.get("/produtos", ProdutoController.listarTodos);

// Listar produto por ID
router.get("/produto/:id", ProdutoController.listarPorId);

// Cadastrar um produto
router.post("/produto/cadastrar", ProdutoController.cadastrar);

// Atualizar produto por ID
router.patch("/produto/atualizar/:id", ProdutoController.atualizar);

// Deletar por ID
router.delete("/produto/deletar/:id", ProdutoController.deletarPorId);

// Deletar todos
router.delete("/produtos/deletar", ProdutoController.deletarTodos);

// Total de produtos
router.get("/produtos/total", ProdutoController.totalProdutos);

export default router;