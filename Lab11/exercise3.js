function removeFalse(inputArr) {
    const authorized = inputArr.filter(x => x['authenticated']);
    return authorized
}

module.exports = removeFalse
  