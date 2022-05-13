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

const paintingData = [{ painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley' }, { painting_index: 284, season: 1, episode: 3, painting_title: 'Ebony Sunset' }];
app.get('/paintings', async function (req, res) {
    res.json(paintingData);
});

// goes at the end
app.listen(config.app.port, () => {
    console.log(`Bob Ross server listening at http://localhost:${config.app.port}`);
});