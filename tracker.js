const inquirer = require("inquirer");
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "NewYorkMets!1986",
  database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    console.clear();
    console.log ("=====================================")
    console.log ("|| WELCOME TO THE EMPLOYEE DATABASE ||");
    console.log ("=====================================")
    runEmployeeDB();
  });
  


//Function for questions the user answers in the command line.

function runEmployeeDB() {

    inquirer.prompt(
      { 
            type: "list",
            name: "action",
            message:"What would you like to do today?",
            choices: [
                "View the Employee List",
                "View employee by Department",
                "View employee by Manager",
                "Add Employee", 
                "Remove Employee",
                "Update Employee's Role",
                "Update Employee's Manager",
                "Add Department",
                "Remove Department",
                "Add a role",
                "Remove a role",
                "Exit"
            ]
        })
            .then(function(answer) {
            switch(answer.action) {
    
                //View Employee List
                case "View the Employee List":
                    employeeList();
                break;
    
                 //VIEW Employee BY DEPT.
                 case "View employee by Department":
                    employeeByDept();
                break;

                 //VIEW Employee BY MGR.
                 case "View employee by Manager":
                    employeeByMgr();
                break;

                 //ADD an employee
                 case "Add Employee":
                    addEmployee();
                break;

                 //REMOVE and Employee
                 case "Remove Employee":
                    removeEmployee();
                break;

                 //UPDATE Employee ROLE
                 case "Update Employee's Role":
                    updateRole();
                break;

                 //UPDATE Employee MGR.
                 case "Update Employee's Manager":
                    updateMgr();
                break;

                 //ADD DEPT.
                 case "Add Department":
                    addDept();
                break;

                 //REMOVE DEPT.
                 case "Remove Department":
                    removeDept();
                break;

                 //ADD ROLE
                 case "Add a role":
                    addRole();
                break;

                 //REMOVE ROLE
                 case "Remove a role":
                    removeRole();
                break;

                 //EXIT
                 case "Exit":
                    connection.end();
                break;
            }
            
        });
    }
        //Functions for each query
    function employeeList() {
        let query = "SELECT * FROM employees INNER JOIN role ON employees.roleId = role.id";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }

    function employeeByDept() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }
    function employeeByMgr() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }

    function addEmployee() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }

    function removeEmployee() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }

    function updateRole() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }
    
    function updateMgr() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }


    function addDept() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }


    function removeDept() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }


    function addRole() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }


    function removeRole() {
        let query = "";
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.table(res)
        })
        runEmployeeDB();
    }