const stringLength = (str) => {
  return str.length <= 10 && str.length > 1? str.length : false;
  }
const word = '';
console.log(stringLength(word));

module.exports = stringLength
