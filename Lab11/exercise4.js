function multiplyOdd(inputArr) {
    newArr = [];
    for (i in inputArr) {
        if (inputArr[i] % 2 != 0) {
            for (let x=i; x>=0; x--) {
                if (inputArr[x] %2 == 0) {
                    newArr.push(inputArr[i] * inputArr[x])
                    break
                }
            }
        }
    }
    return newArr; 
}


module.exports = multiplyOdd
  