const config = require('config')

const host      = config.get('DATABASES.POSTGRESQL.HOST');
const port      = config.get('DATABASES.POSTGRESQL.PORT');
const user      = config.get('DATABASES.POSTGRESQL.USER');
const pass      = config.get('DATABASES.POSTGRESQL.PASSWORD');
const schema    = config.get('DATABASES.POSTGRESQL.DATABASE');

const options = {
    client: 'pg',
    version: '11',
    connection: {
      host : host,
      port: port,
      user : user,
      password : pass,
      database : schema
    },
    migrations: {
        tableName: 'migrations'
    },
    seeds: {
        directory: './migrations/seed/dev'
    }
};

const knex = require('knex')(options);

module.exports.client   = knex;
module.exports.options  = options;