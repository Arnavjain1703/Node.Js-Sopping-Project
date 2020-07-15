const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'node-complete',
        password:'Arnav@1231703'
    }
);

module.exports = pool.promise();