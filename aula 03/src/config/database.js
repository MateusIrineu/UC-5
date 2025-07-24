import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import pg from 'pg';
// const { Pool } = pg;

dotenv.config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
{
  host: process.env.DB_HOST,
  dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  logging: true
});

try {
  await sequelize.authenticate();
  console.log('Conexão realizada com sucesso!');
  await sequelize.sync({ force: true, alter: true })
  console.log('Tabela produto criada com sucesso.')
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}














// const client = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORTA,
//     database: process.env.DB_NAME,
//     // ssl: { rejectUnauthorized: false }
// });

// export default client;
export default sequelize;