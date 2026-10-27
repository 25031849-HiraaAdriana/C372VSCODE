const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'IloveDibo_100436',
  database: 'petcare'
});

module.exports = connection;
