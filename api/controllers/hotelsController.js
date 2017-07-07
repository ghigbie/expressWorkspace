module.exports.hotelsGetAll = function(req, res) {
    console.log("GET the hotels");
    res
        .status(200)
        .json( {"jsonData" : true});
};