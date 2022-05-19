const bobRossData = require('../bob-ross-data.js');

const SimpleNodeLogger = require('simple-node-logger');
const opts = {
    logFilePath: config.app.logFile,
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

async function testSomething() {
    let someData = await bobRossData.sqlTest();
    log.info(someData);
}

testSomething();