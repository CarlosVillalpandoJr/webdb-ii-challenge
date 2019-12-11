const express = require('express');

const server = express();

const CarRouter = require('../data/cars/cars-router');

server.use(express.json())
server.use('/api/cars', CarRouter)

server.get('/', (req, res) => {
    res.send('<h2>webdb-ii-challenge</h2>')
})

module.exports = server;