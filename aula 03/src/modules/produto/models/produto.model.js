import client from "../../../config/database.js"


class ProdutoModel {

    static async cadastrar(nome, preco, descricao) {
        const consulta = `Insert into produtos(nome, preco, descricao)
        values ($1, $2, $3) returning *;`
        const dados = [nome, preco, descricao]
        const resultado = await client.query(consulta, dados)
        return resultado.rows[0];
    }
    
    static async listarPorId(id) {
        const dados = [id]
        const consulta = `select * from produtos where id = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }

    static async listarTodos() {
        const consulta = `select * from produtos;`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async atualizar(id, nome, preco, descricao) {
        const dados = [nome, preco, descricao, id]
        const consulta = `update produtos set nome = $1, preco = $2, descricao = $3 where id = $4 returning *;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows[0];
    }

    static async deletarPorId(id) {
        const dados = [id]
        const consulta = `delete from produtos where id = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async deletarTodos() {
        const consulta = `delete from produtos;`
        const resultado = await client.query(consulta);
        return resultado.rows
    }

    static async totalProdutos() {
        const consulta = `select count(id) as total from produtos;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

}

// const consulta 
// const resultado da consulta
// return retornando o resultado da consulta

export default ProdutoModel;