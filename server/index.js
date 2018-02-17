const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js');

const app = express();

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../compiled/client/src'));

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.post('/logs', urlencodedParser, function(req, res) {
  database.save(req.body);
  res.end();
});

app.get('/logs', urlencodedParser, function(req, res) {


  let username = Object.keys(req.query)[0];

  function sendLogs(data) {
    res.write(JSON.stringify(data));
    res.end();
  }

  database.retrieve(username, sendLogs);
});

app.listen(3000, () => console.log('Listening on port 3000!'));

