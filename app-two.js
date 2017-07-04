const express = require("express");
const app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.get('/', (req, res) => {
    console.log(`GET the homepage`);
    res
        .status(200)
        .send("<h1>Home page!!!</h1>");
});

app.get('/json', (req, res) => {
    console.log(`GET the json`);
    res
        .status(200)
        .json({"jsonData": true});
});

var server = app.listen(app.get('port'), app.get('ip'), () => {
    var port = server.address().port;
    var ip = app.get('ip');
    console.log(`Server is listening on port ${port}`);
    console.log(`Ip is set to ${ip}`);
});
