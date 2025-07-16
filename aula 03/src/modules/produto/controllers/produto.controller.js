import ProdutoModel from "../models/produto.model.js";

class ProdutoController {
    static async cadastrar(req, res) {
        try {
            const { nome, preco, descricao } = req.body;
            if(!nome || !preco || !descricao) {
        return res.status(400).json({ message: 'Erro do cliente.' })
    }
        ProdutoModel.cadastrar(nome, preco, descricao)
        res.status(201).json({ message: 'Produto criado com sucesso!' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }
    static async listarTodos(req, res) {
        try {
            const produtos = ProdutoModel.listarTodos()
            if (produtos.length === 0) {
                res.status(200).json({ message: 'Produtos listados com sucesso!' })
            }
        } catch (error) {
            
        }
    }

    static async listarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const produto = ProdutoModel.listarPorId(id)
            
            if(!produto.length === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            res.status(200).json(produto)

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static async atualizar(req, res) {
        try {
            const { novoNome, novoPreco, novaDescricao } = req.body
            const id = parseInt(req.params.id);
            const produto = ProdutoModel.atualizar(id, novoNome, novoPreco, novaDescricao)

            if(produto.length === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            produto.nome = novoNome || produto.nome
            produto.preco = novoPreco || produto.preco
            produto.descricao = novaDescricao || produto.descricao
            res.status(200).json({ message: 'Produto atualizado com sucesso!' })

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }
    static async deletarPorId(req, res) {
        try {

            const id = parseInt(req.params.id)
            const produto = ProdutoModel.deletarPorId(id)
            if (!produto.length === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }
            return res.status(200).json({ message: 'Produto deletado com sucesso.' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static async deletarTodos(req, res) {
        try {
            ProdutoModel.deletarTodos()
        } catch (error) {
            
        }
    }
}

export default ProdutoController;