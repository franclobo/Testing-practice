class Calculator {
  constructor (num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  add (num1, num2){
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

const calculator = new Calculator;

calculator.add(2,3);
console.log(calculator.add(2,3));
calculator.subtract(2, 3);
console.log(calculator.subtract(2, 3));
calculator.multiply(2, 3);
console.log(calculator.multiply(2, 3));
calculator.divide(2, 3);
console.log(calculator.divide(2, 3).toFixed(2));

module.exports = Calculator