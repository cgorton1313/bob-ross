const config = require('./config.js');
const mysql = require('mysql');
const util = require('util'); // for promisify

// this function will connect to the database, query, disconnect, and return the query result
async function getQueryData(sql) {
    // this statement uses the values from config.js
    // it's common to keep usernames, passwords, etc., in a config file
    let connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });

    // standard connect operation with some error handling
    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            // log.error('error when connecting to db:', err);
        } else {
            console.log('Connected to database ' + config.db.database + ' as user ' + config.db.user);
            // log.info('Connected to database ' + config.db.database + ' as user ' + config.db.user);
        }
    });

    let query = util.promisify(connection.query).bind(connection); // node native promisify

    // try to query the database, handle errors if they happen
    let result;
    try {
        result = await query(sql);
    } catch (err) {
        console.log(err);
        // log.error(err);
        result = '{Error}';
    }

    // it's important to close the database connection
    connection.end();

    return result;
}

async function sqlTest() {
    let sql = `
    SELECT *
        FROM paintings`;
    let result = await getQueryData(sql);
    return result;
}