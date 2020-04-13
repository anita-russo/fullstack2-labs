function delayedPromise(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num);
    }, 500);
  });
}

delayedPromise(5)
  .then(result => console.log(result))

async function asyncPromise(num) {
  const result = await delayedPromise(num);
  return result;
}

asyncPromise(6)
  .then(result => console.log(result));
