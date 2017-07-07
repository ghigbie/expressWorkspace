const express = require("express");
const router = express.Router();

const ctrlHotels = require('../controllers/hotelsController.js');

router
    .route("/hotels")
    .get( ctrlHotels.hotelsGetAll());
    
module.exports = router;