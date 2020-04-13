function resolvedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({'message': 'delayed success!'})
    }, 500);
  });
}

resolvedPromise().then(success => console.log(success))


function rejectedPromise() {
  return new Promise(reject => {
    setTimeout(() => {
      reject({'error': 'delayed exception!'})
    }, 500);
  })
}

rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error))
