const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const https = require('node:https');

const port = 3000;
const app = express();
let gitData = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const text = 'Git User';
  res.render('list', { headerText: text, gitData: gitData });
});

app.post('/', (req, res) => {
  const options = {
    host: 'api.github.com',
    port: 443,
    path: `/users/${req.body.username}`,
    method: 'get',
    headers: {
      'user-agent': 'json'
    }
  };

  https.get(options, (response) => {
    let jsonData = '';

    response.on('data', data => {
      jsonData += data;
    });

    response.on('end', data => {
      const parseData = JSON.parse(jsonData);
      gitData = [parseData['name'], parseData['url'], parseData['avatar_url']];
      res.redirect('/');
    });
  });
});

app.listen(port, () => console.log(`Server started on port ${port}.`));