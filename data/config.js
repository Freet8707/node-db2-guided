const knex = require('knex');

const knexfile = require('../knexfile');
//initiate a connection to the db,
// so we can import it to other files
module.exports = knex(knexfile);