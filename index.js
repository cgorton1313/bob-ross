// requires
const express = require('express');
const path = require('path');
const config = require(__dirname + '/config.js');
const bobRossData = require(__dirname + '/bob-ross-data.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public'))); // send all the static stuff

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// const paintingData = [{ painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley' }, { painting_index: 284, season: 1, episode: 3, painting_title: 'Ebony Sunset' }];
app.get('/paintings', async function (req, res) {
    // res.json(paintingData);
    res.json (await bobRossData.getPaintings());
});

// always goes last
app.listen(config.app.port, () => {
    console.log(`Bob Ross server listening at http://localhost:${config.app.port}`);
});