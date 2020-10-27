const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: 'postgresql://dunder_mifflin@localhost/knex-practice',
})

// if specified a password for the user you must include it here: 
// connection: 'postgresql://dunder_mifflin:password-here@localhost/knex-practice',

