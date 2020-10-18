import express from 'express'; //Express auxilia no sistema de rotas baseando-se em requisições e respostas

import './database/connection';

const app = express();

app.use(express.json()); //Faz com que o express reconheça JSON

//Rota = conjunto, recurso = usuário, Métodos HTTP, Parâmetro -> query params (filtro), route params (identificador), body (informações compostas)
app.post('/users', (request, response) => {
    return response.send({message:"Hello world"});
});

app.listen(3333);