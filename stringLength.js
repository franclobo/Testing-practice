const stringLength = str => {
  return str.length <= 10 && str.length > 1 ? str.length : false;
};

module.exports = stringLength;
