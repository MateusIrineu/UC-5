import client from "../../../config/database.js"


class ProdutoModel {

    static async cadastrar(nome, preco, descricao) {
        const dados = [nome, preco, descricao]
        const consulta = `Insert into produtos(nome, preco, descricao)
        values ($1, $2, $3) returning *;`
        const resultado = await client.query(dados, consulta)
        return resultado.rows;
    }
    
    static async listarPorId(id) {
        const dados = [id]
        const consulta = `select * from produtos where id = $1;`
        const resultado = await client.query(dados, consulta)
        return resultado.rows;
    }

    static async listarTodos() {
        const consulta = `select * from produtos;`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async atualizar(id, nome, preco, descricao) {
        const dados = [id, nome, preco, descricao]
        const consulta = `update produtos set nome = $2, preco = $3, descricao = $4, where id = $1 returning *;`
        const resultado = await client.query(dados, consulta)
        return resultado.rows;
    }

    static async deletarPorId(id) {
        const dados = [id]
        const consulta = `delete from produtos where id = $1`;
        await client.query(dados, consulta);
    }

    static async deletarTodos() {
        const consulta = `delete from produtos;`
        await client.query(consulta);
    }

}



export default ProdutoModel;