// Filename: api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome to the Festival Database API !'
    });
});

// Import Festival Controller
var festivalController = require('./festivalController');

// Festival routes
router.route('/Festivals')
     .get(festivalController.index);

router.route('/Festivals/departement/:departement')
     .get(festivalController.listDepartement);

router.route('/Festivals/postal/:postal')
     .get(festivalController.listPostal);

     
// Export API routes
module.exports = router;

