const express = require('express');
const app = express();
const path = require('path');


const PORT = 4200;

// viewed at http://localhost:8080
app.get('/', function(req: any, res: any) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log(`listening to port ${PORT}`)
app.listen(PORT);