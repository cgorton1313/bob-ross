// requires
const express = require('express'); 
const path = require('path');

const app = express();
const config = require(__dirname + '/config.js'); // may need to add to other server-side files

app.use(express.static(path.join(__dirname + '/public'))); // send all the static stuff

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    });

// goes at the end
app.listen(config.app.port, () => {
    console.log(`Bob Ross server listening at http://localhost:${config.app.port}`);
    });