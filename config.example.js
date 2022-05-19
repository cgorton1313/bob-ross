// make a copy of this file
// RENAME IT config.js
// get the host, user, etc. from the public google drive folder and put them in config.js
// DO NOT PUT THAT IN THIS FILE

const config = {
    app: {
        port: 33233,
        logFile: "bob-ross.log"
    },
    db: {
        host: '',
        user: '',
        password: '',
        database: ''
    }
};

module.exports = config;