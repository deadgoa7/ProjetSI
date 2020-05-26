// festivalController.js

//Import model
Festival = require('./festivalModel');

//Handle index actions
exports.index = function (req, res) {
    Festival.get(function (err, festivals) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Festivals retrieved successfully !",
            data: festivals
        });
    });
};

//Handle view departement actions
exports.listDepartement = function (req, res) {
    Festival.find({
        "fields.departement": req.params.departement
    },
    function (err,docs) { 
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Festivals retrieved successfully for departement: "+req.params.departement+" ",
            data: docs
        });
    });
  }

//Handle View Postal actions
exports.listPostal= function (req, res) {
    Festival.find({
        "fields.code_postal": req.params.postal
    },
    function (err,docs) { 
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Festivals retrieved successfully for postal code: "+req.params.postal+" ",
            data: docs
        });
    });
  }

//Handle POST request 
exports.addFestivals = function (req, res){
    
}
