const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js');

const app = express();

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../compiled/client/src'));

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.post('/logs', urlencodedParser, function(req, res) {
  console.log(req.body);
});

app.listen(3000, () => console.log('Listening on port 3000!'));

