const express = require('express')

const suppliersRouter = require('../suppliers/suppliersRouter');
const productsRouter = require('../products/productsRouter');

const server = express();

//global middleware waaaat
server.use(express.json());

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...'})
})

module.exports = server