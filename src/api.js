const serverless = require("serverless-http");
const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/search", (req, res) => {
    // function that searches for a song with the Spotify API
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

router.get ('/', (req, res) => {
    res.json ({'hello': 'hi!'})
})

app.use('/.netlify/functions/api', router)

// Create a new record 
router.get('/add', (req,res) => {
    res.json ({'hellow': 'hi add'})
})

module.exports.handler = serverless(app);

  