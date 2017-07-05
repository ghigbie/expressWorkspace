const express = require("express");
const router = express.Router();

router
    .route("/json")
    .get( (req, res) => {
       console.log("GET the json");
       res
        .status(200)
        .json({"jsonData" : true});
    });

module.exports = router;