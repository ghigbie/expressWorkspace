const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.get('/', (req, res) =>{
    console.log(`GET the homepage`);
    res
     .status(200)
     .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', (req, res) => {
   console.log('GET the json');
   res
    .status(200)
    .json( {"jsonData" : true} );
});

app.get('/file', (req, res) => {
   res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), app.get('ip'), () => {
    var port = server.address().port;
    console.log(`Express server listening on port ${port}.`);
});
