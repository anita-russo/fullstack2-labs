const makeUpperCase = (words) => new Promise((resolve, reject) => {
  for (i of words) {
    if (typeof(i) != "string") {
      reject(`Error: Not all items in the array are strings!`);
    }
  }
  let result = words.map(word => word.toUpperCase());
  resolve(result);
});

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

makeUpperCase(mixedArray)
  .then(sortWords = (result) => result.sort())
  .then((result) => console.log(result))
  .catch(error => console.log(error))

makeUpperCase(arrayOfNames)
  .then(sortWords = (result) => result.sort())
  .then((result) => console.log(result))
  .catch(error => console.log(error))
