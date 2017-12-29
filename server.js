const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Bring in the models
const db = require("./models");

// Bring in the routes
const routes = require('./routes/api-routes.js');
routes(app);

// Syncing the sequelize models and then starting the Express app
db.sequelize.sync({/* force: true */}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
