class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add(num1, num2) {
    num1 = this.num1;
    num2 = this.num2;
    let sum = num1 + num2;
    return sum;
  }

  subtract(num1, num2) {
    num1 = this.num1;
    num2 = this.num2;
    let substract = num1 - num2;
    return substract;
  }

  multiply(num1, num2) {
    num1 = this.num1;
    num2 = this.num2;
    let multiply = num1 * num2;
    return multiply;
  }

  divide(num1, num2) {
    num1 = this.num1;
    num2 = this.num2;
    let divide = num1 / num2;
    return divide;
  }
}

module.exports = Calculator