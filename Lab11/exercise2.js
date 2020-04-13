function removeVowels(input) {
    let arr = input.split("")
    var newStr = "";
    vowels = ['a','e','i','o','u']
    for (i of arr) {
        if (vowels.indexOf(i.toLowerCase()) == -1) {
            newStr += i
        }
    }
    return newStr;
}

module.exports = removeVowels
  