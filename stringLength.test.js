const stringLength = require('./stringLength.js');

it('The length of "world" is 5', () => {
  const word = 'world';
  expect(stringLength(word)).toBe(5);
});

it('The length of "Happy Together" is longer than 10 letters.', () => {
  const word = 'Happy Together';
  expect(stringLength(word)).toBe(false);
});

it('There is no word.', () => {
  const word = '';
  expect(stringLength(word)).toBe(false);
});