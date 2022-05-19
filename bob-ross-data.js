const config = require('./config.js');
const mysql = require('mysql');
const util = require('util'); // for promisify

const SimpleNodeLogger = require('simple-node-logger');
const opts = {
    logFilePath: config.app.logFile,
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

async function getQueryData(sql) {
    let connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });

    connection.connect(function (err) {
        if (err) {
            log.error('error when connecting to db:', err);
        } else {
            log.info('Connected to database ' + config.db.database + ' as user ' + config.db.user);
        }
    });

    let query = util.promisify(connection.query).bind(connection); // node native promisify

    let result;
    try {
        result = await query(sql);
    } catch (err) {
        log.error(err);
        result = '{Error}';
    }

    connection.end();

    return result;
}

async function sqlTest() {
    let sql = "SELECT * FROM BobRossData";
    let result = await getQueryData(sql);
    return result;
}

async function getPaintings() {
    let sql = "SELECT image_file, img_src, painting_title, painting_index, episode, season, colors, youtube_src From BobRossData ORDER BY season asc, episode asc";
    let result = await getQueryData(sql);
    return result;
}

async function getPainting(id) {
    let sql = "SELECT image_file, img_src, painting_title, painting_index, episode, season, colors, youtube_src From BobRossData WHERE painting_index = " + id;
    let result = await getQueryData(sql);
    return result;
}

async function getSeason(id) {
    let sql = "SELECT image_file, img_src, painting_title, painting_index, episode, season, colors, youtube_src From BobRossData WHERE painting_index = " + id;
    let result = await getQueryData(sql);
    return result;
}

module.exports = {
    sqlTest,
    getPaintings,
    getPainting, 
    getSeason
}