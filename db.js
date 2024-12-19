const mysql2= require('mysql2');
require('dotenv').config();
//koneksi
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    });

    //cek
    db.connect((err) => {
        if (err) {
          console.error('Database connection failed:', err.stack);
          return;
        }
        console.log('Connected to the database.');
      });
      module.exports=db;