const express = require("express");
const app = express();

app.set('port', 3000);
app.set('ip', process.env.IP);

app.listen(app.get('port'), app.get('ip'), () => {
    var port = app.get('port');
    var ip = app.get('ip');
    console.log(`Server is listening on port ${port}`);
    console.log(`Ip is set to ${ip}`);
});
