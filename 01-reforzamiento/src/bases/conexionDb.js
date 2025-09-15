const mysql = require('mysql');
const conn = mysql.createConnection({ host: 'localhost', user: 'root', password: '1234', database: 'testdb' });

conn.connect();
conn.query("SELECT * FROM usuarios", (err, results) => {
    if (err) throw err;
    console.log(results);
});
conn.end();














