const stringLength = (str) => {
  const count = str.length <= 10 && str.length > 1 ? str.length : false;
  return count;
};

module.exports = stringLength;
