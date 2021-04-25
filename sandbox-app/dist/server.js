var express = require('express');
var app = express();
var path = require('path');
var PORT = 4200;
// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
console.log("listening to port " + PORT);
app.listen(PORT);
//# sourceMappingURL=server.js.map