var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
  mysql.createConnection({
  host: "localhost",
  port: 3030,
  user: "root",
  password: "",
  database: "email_db"
});
};

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;