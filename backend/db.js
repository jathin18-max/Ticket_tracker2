const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ticket_tracker'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }             
    console.log('Connected to the MySQL database.');    
});
module.exports = connection;
