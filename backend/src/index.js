/**
 * Rotas / Recursos.
 */

/** 
 * Métodos HTTP:
 * 
 * GET - Buscar/listar uma informação no back-end;
 * POST - Criar uma informação no back-end;
 * PUT - Alterar uma informação no back-end;
 * DELETE - Remover uma informação no back-end.
 * 
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params - Parêmetros nomeados e enviados na rota após '?' (Filtros, paginação...);
 * Route Params - Parâmetros utilizados para identificar recursos;
 * Request Body - Corpo da requisição, utilizado para auterar ou criar recursos;
 * 
 */

/**
 * Configurando Banco de Dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, couchDB, etc
 * 
 * Escolhido: SQLite
 * -------------------------------------------------------------------------------------------------------------
 * Métodos de comunicação:
 * 
 * 1- Driver: SELECT * FROM users
 * 2- Query Builder: table('users').select('*').where()
 * 
 * Escolhido: 2
 */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const aplication = express();

aplication.use(cors());
aplication.use(express.json());
aplication.use(routes);
aplication.use(errors());

aplication.listen(3333);
