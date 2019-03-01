const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '12345',
  database: 'test'
});

connection.connect(function (err) {
  if (err) {
    console.error('mysql. Unable to connect to the database: ' + err.stack);
    return;
  }

  console.log('mysql. Connection has been established successfully');
});

module.exports = connection;
