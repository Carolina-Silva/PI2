const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)

function execute() {
    console.log("db") 
}