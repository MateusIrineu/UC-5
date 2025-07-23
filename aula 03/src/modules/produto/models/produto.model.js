// const sequelize = new Sequelize('sqlite::memory:');
import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database.js';

const ProdutoModel = sequelize.define(
  'Produto',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
            args: [2, 100],
            msg: 'O nome deve ter no mínimo 2 caracteres, e no máximo 100.'
        },
        notEmpty: {
            msg: 'O campo none deve ser preenchido!'
        },
        is: {
            args: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/
        },
        }
      },
          preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validade: {
            isDecimal: {
                msg: 'O preço do produto deve ser no formato (valor, casa decimal)'
            },
            isNumeric: {
                msg: 'O campo preço deve ser um número!'
            },
            isMenor(value) {
                if(value === null && value <= 0) {
                    throw new Error('O preço do produto não pode ser menor igual a zero!');
                }
            }
        }
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: {
                args: [5, 50],
                msg: 'A descrição deve ter no mínimo 5 e no máximo 50 caracteres'
            }
        }
    }
    },

  {
    // Other model options go here
    tableName:'produto',
    createdAt:'criado_em',
    updateAt: 'atualizado_em'
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
export default ProdutoModel;




































// import client from "../../../config/database.js"


// class ProdutoModel {

//     static async cadastrar(nome, preco, descricao) {
//         const consulta = `Insert into produtos(nome, preco, descricao)
//         values ($1, $2, $3) returning *;`
//         const dados = [nome, preco, descricao]
//         const resultado = await client.query(consulta, dados)
//         return resultado.rows[0];
//     }
    
//     static async listarPorId(id) {
//         const dados = [id]
//         const consulta = `select * from produtos where id = $1;`
//         const resultado = await client.query(consulta, dados)
//         return resultado.rows;
//     }

//     static async listarTodos() {
//         const consulta = `select * from produtos;`
//         const resultado = await client.query(consulta)
//         return resultado.rows
//     }

//     static async atualizar(id, nome, preco, descricao) {
//         const dados = [nome, preco, descricao, id]
//         const consulta = `update produtos set nome = $1, preco = $2, descricao = $3 where id = $4 returning *;`
//         const resultado = await client.query(consulta, dados)
//         return resultado.rows[0];
//     }

//     static async deletarPorId(id) {
//         const dados = [id]
//         const consulta = `delete from produtos where id = $1 returning *;`
//         const resultado = await client.query(consulta, dados);
//         return resultado.rows;
//     }

//     static async deletarTodos() {
//         const consulta = `delete from produtos;`
//         const resultado = await client.query(consulta);
//         return resultado.rows
//     }

//     static async totalProdutos() {
//         const consulta = `select count(id) as total from produtos;`
//         const resultado = await client.query(consulta);
//         return resultado.rows;
//     }

// }

// // const consulta 
// // const resultado da consulta
// // return retornando o resultado da consulta

// export default ProdutoModel;