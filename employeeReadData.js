const inquirer = require("inquirer");
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "NewYorkMets!1986", // <---Enter your mySql password between quotations here.
  database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
   viewEmployees();
    });
  
  function viewEmployees () {
    connection.query("SELECT * FROM employees", function (err, res) {
      if (err) throw err;
      console.log('\n' + res);
      connection.end();
    });
  }