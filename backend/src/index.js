const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 * 
 * Tipo de parametros
 * 
 * Query: parametros nomeados enviados na rota apos '?'
 * request guarda todos os dados que vem e response a resposta
 * const params = request.query;
 * no caso de post, request.body
 * informar que ta usando json: app.use(express.json()) <- antes de todas as requisições
 * 
 * Route Params: parametros utilizados para identificar recursos
 * app.get('/users/:id', (request, response) => )
 * const params = request.params
 * 
 */

 /**
  * SQL: SQLite
  * Driver: Select * From Users
  * Query Builder: table('users').select('*').where()
  */


