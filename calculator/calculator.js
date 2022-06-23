const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

function calculate(weight, height) {
  return (weight / Math.pow((height), 2)).toFixed(2);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', (red, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  const result = parseInt(num1) + parseInt(num2);
  res.send(`The result of the calculation is: ${result}`);
});

app.post('/bmicalculator', (req, res) => {
  const { weight, height } = req.body;
  let bmi = calculate(parseFloat(weight), parseFloat(height));
  res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, () => {
  console.log(`Server starts on port ${port}`);
});