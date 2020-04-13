const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = mixedArray => {
    return new Promise(function(resolve, reject) {
        if (lowerCaseWords) {
            resolve(mixedArray.filter(w => typeof w === 'string').map(w => w.toLowerCase()));
        } else {
            reject("error")
        }
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
