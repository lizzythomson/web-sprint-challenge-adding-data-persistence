function convertIntToBool(obj, propertyName) {
  if (obj) {
    obj[propertyName] = obj[propertyName] !== 0;
  }
}

module.exports = convertIntToBool;
