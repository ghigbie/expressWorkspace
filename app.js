const express = require('express');
const app = express();

app.set('port', 3000);
app.set('ip', process.env.IP);

app.get('/', (req, res) =>{
    console.log(`GET the homepage`);
    res
    .status(200)
    .send("Homepage");
});

app.get('/json', (req, res) => {
   console.log("GET the json");
   res
    .status(200)
    .json( {"jsonData" : true} );
});

var server = app.listen(app.get('port'), app.get('ip'), () => {
    var port = server.address().port;
    console.log(`Express server listening on port ${port}.`);
});
