const knex = require('knex');
const configuration = require('../../knexfile');

const config =  process.config.NODE_ENV == 'teste' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;