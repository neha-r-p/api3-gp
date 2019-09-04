const server = require('./api/server');

const port = 6666
server.listen(port, () => console.log(`\nAPI running on port ${port}`))


