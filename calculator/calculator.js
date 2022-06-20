const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

function calculate(weight, height) {
  // let bmi;

  //Now I have added the formula for calculating BMI in "bmi"
  return (weight / Math.pow((height / 100), 2)).toFixed(1);

  // //When the BMI is less than 18.5, you can see the text below
  //   if(bmi < 18.5){
  //       category = "Underweight 😒";
  //   } else if( bmi >= 18.5 && bmi <= 24.9 ){
  //       category = "Normal Weight 😍";
  //   } else if( bmi >= 25 && bmi <= 29.9 ){
  //       category = "Overweight 😮";
  //   } else{
  //       category = "Obese 😱";
  //   }
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
  const bmi = calculate(weight, height);
  res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, () => {
  console.log(`Server starts on port ${port}`);
});