const express = require('express');
const app = express();

const port = 3000;
const ip = process.env.IP;
app.listen(port, ip, () => {
    console.log(`Express server listening on port ${port}.`);
});