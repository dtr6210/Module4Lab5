const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(number1, number2);

  res.status(200).json({ result: sum });
};


const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 =parseInt(req.query.num2);
    let difference = number1 - number2;
    console.log(number1, number2);

 res.status(200).json({result: difference})
};



const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 =parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(number1, number2);

     res.status(200).json({result: product});
};


const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 =parseInt(req.query.num2);
    let quotient = number1 / number2;
    console.log(number1, number2);

    res.status(200).json({result: quotient});
};

module.exports = {
    addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,
};

    