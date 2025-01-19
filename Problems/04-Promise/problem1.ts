type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  return new Promise(function (resolve, reject): void {
    promise1.then(function (result1): void {
      promise2.then(function (result2): void {
        resolve(result1 + result2);
      });
    })
  })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */