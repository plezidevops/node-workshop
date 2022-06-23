const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => console.log(`Server starts on port ${port}`));

app.post('/', (req, res) => {
  const { countryName: country, cityName: city } = req.body;
  const unit = 'imperial';
  const apiKey = '6b1bc321cd07b1af9b875a79248b6484';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country},${city}&appid=${apiKey}&unit=${unit}`;

  https.get(url, response => {
    response.on('data', data => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(`<h1>The temperature in ${city}, ${country} is ${temp} degrees Fahrenheit.</h1>`);
      res.write(` <img src="${imageURL}" alt="weather icon">`);
      res.send();
    });
  });
});