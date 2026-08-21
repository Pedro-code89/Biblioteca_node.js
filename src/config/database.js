const knex = require('knex')({

    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Biblioteca'
    }

});

module.exports = knex;