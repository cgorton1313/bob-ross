const express = require('express'); // put all requires at the top of the file
const app = express();

// goes at the end
app.listen(33233, () => {
    console.log(`server listening at http://localhost:33233`);
    });