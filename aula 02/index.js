const express = require('express')
const dotenv = require('dotenv')
dotenv.config() // Carrega as variáveis de ambiente do arquivo .env
const app = express()
const port = process.env.PORTA

app.use(express.json())

const produtos = []

// para listar todos os produtos
app.get('/produtos', (req, res) => {
  try {
    const produto = produtos.map(produto => produto)
    if (produtos.length === 0) {
      return res.status(404).json({ message: 'Nenhum produto encontrado.' })
    }
    res.status(200).json(produtos)
} catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message});
  }
})

// para criar um produto
app.post('/produtos/cadastrar', (req, res) => {
  try {
    const { id, nome, preco, descricao } = req.body
    if(!id || !nome || !preco || !descricao) {
        return res.status(400).json({ message: 'Erro do cliente.' })
    }
    const novoProduto = { id, nome, preco, descricao }
    produtos.push(novoProduto)
    res.status(201).json({ message: 'Produto criado com sucesso!' })
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
  }
})

// para atualizar um produto existente
app.patch('/produtos/atualizar/:id', (req, res) => {
  try {
    const { novoNome, novoPreco, novaDescricao } = req.body
    const id = parseInt(req.params.id) // ver isso
    const produto = produtos.find(produto => produto.id === id)
    if(!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' })
    }

    produto.nome = novoNome || produto.nome
    produto.preco = novoPreco || produto.preco
    produto.descricao = novaDescricao || produto.descricao
    res.status(200).json({ message: 'Produto atualizado com sucesso!' })

  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
  }
})

// para listar pelo id
app.get('/produtos/listar/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const produto = produtos.find(produto => produto.id === id)
    if(!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    res.status(200).json(produto)

  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
  }
})

// para deletar todos os produtos
app.delete('/produtos/deletar', (req, res) => {
  try {
    produtos.length = 0
    res.status(200).json({ message: 'Todos os produtos foram deletados.' })
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
  }
})

// para deletar um produto por id
app.delete('/produtos/deletar/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const index = produtos.findIndex(produto => produto.id === id)
    if(!index === -1) {
      return res.status(404).json({ message: 'Produto não encontrado.' })
    } 
    produtos.splice(index, 1)

    res.status(200).json({ message: 'Produto deletado com sucesso.' })

  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})