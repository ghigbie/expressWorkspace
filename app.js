const express = require('express');
const app = express();

app.set('port', 3000);
app.set('ip', process.env.IP);

var server = app.listen(app.get('port'), app.get('ip'), () => {
    var port = server.address().port;
    console.log(`Express server listening on port ${port}.`);
});