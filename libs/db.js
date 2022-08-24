var knex = require('knex')({
  client: "mysql",
  connection: {
    host: "34.101.166.97",
    user: "triples",
    password: "asusx450C#",
    database: 'fullstacknextjs'
  }
})

export default knex
