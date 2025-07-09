import ProdutoModel from "../models/produto.model.js";

class ProdutoController {
    static cadastrar(req, res) {
        try {
            const { id, nome, preco, descricao } = req.body;
            if(!id || !nome || !preco || !descricao) {
        return res.status(400).json({ message: 'Erro do cliente.' })
    }
        ProdutoModel.cadastrar(id, nome, preco, descricao)
        res.status(201).json({ message: 'Produto criado com sucesso!' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }
    static listarTodos(req, res) {
        try {
            const produtos = ProdutoModel.listarTodos()
            if (produtos.length === 0) {
                res.status(200).json({ message: 'Produtos listados com sucesso!' })
            }
        } catch (error) {
            
        }
    }

    static listarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const produto = ProdutoModel.listarPorId(id)
            
            if(!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            res.status(200).json(produto)

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static atualizar(req, res) {
        try {
            const { novoNome, novoPreco, novaDescricao } = req.body
            const id = parseInt(req.params.id);
            ProdutoModel.atualizar(id, novoNome, novoPreco, NovaDescricao)

            produto.nome = novoNome || produto.nome
            produto.preco = novoPreco || produto.preco
            produto.descricao = novaDescricao || produto.descricao
            res.status(200).json({ message: 'Produto atualizado com sucesso!' })

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }
    static deletarPorId(req, res) {
        try {

            const id = parseInt(req.params.id)
            const produto = ProdutoModel.deletarPorId(id)
            if (!produto === null) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }
            return res.status(200).json({ message: 'Produto deletado com sucesso.' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static deletarTodos(req, res) {
        try {
            ProdutoModel.deletarTodos()

        } catch (error) {
            
        }
    }
}

export default ProdutoController;