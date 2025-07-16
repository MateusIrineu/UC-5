import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import client from './database.js';
import ProdutoModel from '../modules/produto/models/produto.model.js';


class CriarTabelas {
    static async produtos() {
        const consulta = `create table if not exists produtos(
            id serial primary key,
            nome varchar(100) not null,
            preco numeric(10,2) not null,
            descricao text not null
            )`;

        try {
            await client.query(consulta);
             console.log('Tabela produtos criada com sucesso!')
        } catch (error) {
        console.error('Erro ao criar tabela produtos:', error.message);
        }
    }
}

CriarTabelas.produtos();

export default CriarTabelas;