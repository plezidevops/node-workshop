const http = require('http');
const { request } = require('https');

const latitude = 45;
const longitude = -75;
const accessKey = '2f2883797e5226a4812d6c043bdb88c9';
const encodeURI = encodeURIComponent(latitude + ',' + longitude);
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${encodeURI}&units=f`;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + data.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', error => {
  console.log('An error', error);
});

request.end();