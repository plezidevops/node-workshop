const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: pascal@gmail.com');
});

app.get('/about', (req, res) => {
  res.send(`
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aliquid impedit nam voluptatem facilis officia porro repudiandae neque officiis earum totam vitae, provident aperiam optio maxime? Inventore obcaecati nihil quam.
  `);
});

app.get('/hobbies', (req, res) => {
  res.send('<h1>Model Airplanes</h1>');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});