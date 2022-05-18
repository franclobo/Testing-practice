const capitalize = require('./capitalize.js');

it('The capitalize word of "hello" is "Hello"', () => {
  const word = 'hello';
  expect(capitalize(word)).toBe('Hello');
});