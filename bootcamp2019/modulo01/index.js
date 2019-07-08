const express = require('express');

const server = express();

server.use(express.json());

users = ['Diego', 'Claudio2', 'Victor']

server.get('/users', (req, res) => {
    res.json(users);
})

//create
server.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
})
//Listar um usuário
server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

//Editar um usuário
server.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

//Excluir usuário
server.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    
    return res.send();
})


server.listen(3000);

