// FileName: index.js

const dbUrl = 'mongodb://localhost:27017/projetArchitecture';

//IMPORT 

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let express = require('express');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect(dbUrl, { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully");

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello to the Festival Database !'));

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running TheFestivalDatabase on port " + port);
});

// Use Api routes in the App
app.use('/api', apiRoutes)