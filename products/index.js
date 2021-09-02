const path = require('path');

const express = require('express');
express.static('/build');

const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/builds/landing-bundle/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
