// implement a get to /suppliers respond with a message
// implement a GET to /suppliers/name that returns the name sent

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'get /suppliers' })
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.status(200).json({ message: `get /suppliers/${name}` })
})

module.exports = router;
