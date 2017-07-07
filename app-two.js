const express = require("express");
var path = require("path");
const app = express();

const routes = require("./api/routes");

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.use((req, res, next) => {
   console.log(req.method, req.url);
   next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/api', routes);

// app.get('/', (req, res) => {
//     console.log(`GET the homepage`);
//     res
//         .status(200)
//         .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/json', (req, res) => {
    console.log('GET the json');
    res
        .status(200)
        .json({"jsonData": true});
});

app.get('/file', (req, res) => {
    console.log('GET the file');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app-two.js'));
});


var server = app.listen(app.get('port'), app.get('ip'), () => {
    var port = server.address().port;
    var ip = app.get('ip');
    console.log(`Server is listening on port ${port}`);
    console.log(`Ip is set to ${ip}`);
});
