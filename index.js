const express = require('express'); 
const path = require('path');

const app = express();

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public'))); 

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    });

// goes at the end
app.listen(33233, () => {
    console.log(`server listening at http://localhost:33233`);
    });