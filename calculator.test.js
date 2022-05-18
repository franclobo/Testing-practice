const assert = require('assert');
const Calculator = require('./calculator.js');

describe('Tests', () => {
  it('calculator_works', () => {
    const calculator = new Calculator();
    calculator.add(2, 3);
    assert(5);

    calculator.subtract(2, 3);
    assert(-1);

    calculator.multiply(2, 3);
    assert(6);

    calculator.divide(2, 3);
    assert(0.67);
  });
});