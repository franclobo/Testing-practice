const reverseString = (str) => {
  return str.split('').reverse().join('');
}
const word = 'emordnilap';
console.log(reverseString(word));

module.exports = reverseString