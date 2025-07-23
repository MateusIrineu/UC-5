import ProdutoModel from "../models/produto.model.js";

class ProdutoController {
    static async cadastrar(req, res) {
        try {
            const { nome, preco, descricao } = req.body;
            if(!nome || !preco || !descricao) {
        return res.status(400).json({ message: 'Erro do cliente.' })
    }
        const produto = await ProdutoModel.create({nome, preco, descricao})
        res.status(201).json({ message: 'Produto criado com sucesso!', produto: produto })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }
    static async listarTodos(req, res) {
        try {
            const produtos = await ProdutoModel.findAll()
            if (produtos.length === 0) {
                res.status(200).json({ message: 'Banco vazio.' })
            }

            res.status(200).json(produtos);

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }

    static async listarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const produto = await ProdutoModel.findByPk(id)
            
            if(!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            res.status(200).json(produto)

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, preco, descricao } = req.body
            const produto = await ProdutoModel.update( { id, nome, preco, descricao }, { where: { id } })

            if(!produto || produto.length === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            produto.nome = nome || produto.nome
            produto.preco = preco || produto.preco
            produto.descricao = descricao || produto.descricao
            res.status(200).json({ message: 'Produto atualizado com sucesso!' })

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }
    static async deletarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const produto = await ProdutoModel.destroy({ where: { id } })
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }
            res.status(200).json({ message: 'Produto deletado com sucesso.' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static async deletarTodos(req, res) {
        try {
           await ProdutoModel.destroy({ truncate: true })

           res.status(200).json({ message: 'Todos os produtos foram deletados com sucesso.' });
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }

    // static async totalProdutos(req, res) {
    //     try {
    //         const total = await ProdutoModel.totalProdutos();
    //         res.status(200).json(total);
    //     } catch (error) {
    //         res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
    //     }
    // }
}

// try 
// const algo = await class.metodo()
// if (!algo) { req.status }
// catch
// res.status

export default ProdutoController;