const reverseString = require('./reverseString.js');

it('The reverse of "emordnilap" is "palindrome"', () => {
  const word = 'emordnilap';
  expect(reverseString(word)).toBe('palindrome');
});