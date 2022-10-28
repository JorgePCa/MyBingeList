const crud = require('./crud');

const { Pool } = require('pg');

const pool = new Pool({
    "host": "localhost",
    "user": "postgres",
    "port": 5432,
    "password": "productys",
    "database": "MyBingeListDB"
});


module.exports = {
    query: (text,params) => pool.query(text, params), 
}

