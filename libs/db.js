var knex = require('knex')({
  client: "mysql",
  connection: {
    // host: "34.101.166.97",

    socketPath: "/cloudsql/triples-359711:asia-southeast2:triples",
    user: "triples",
    password: "asusx450C#",
    database: 'fullstacknextjs'
  }
})

export default knex
