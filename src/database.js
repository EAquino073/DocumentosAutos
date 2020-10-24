const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YourRootPassword',
    database: 'documentacionautos'
})

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }else{
        console.log('Db connected')
    }
})

module.exports = mysqlConnection