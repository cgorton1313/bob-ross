// requires
const express = require('express');
const path = require('path');
const config = require(__dirname + '/config.js');
const bobRossData = require(__dirname + '/bob-ross-data.js');

const app = express();

const SimpleNodeLogger = require('simple-node-logger');
const opts = {
    logFilePath: config.app.logFile,
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

app.use(express.static(path.join(__dirname + '/public'))); // send all the static stuff

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/paintings', async function (req, res) {
    res.json(await bobRossData.getPaintings());
});

app.get('/painting', async function (req, res) {
    let id = req.query.id;
    res.json(await bobRossData.getPainting(id));
});

// always goes last
app.listen(config.app.port, () => {
    log.info(`Bob Ross server listening at http://localhost:${config.app.port}`);
});