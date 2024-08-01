const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

// Promise.all

const promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then((data) => console.log(data)).catch((err) => console.log(err));

const myPromiseAll = (promiseList) => {
  let results = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    promiseList.map((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promiseCompleted++;
          if (promiseCompleted === promiseList.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

myPromiseAll([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.allSettled([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const myPromiseAllSettled = (promiseList) => {
  const mappedPromises = promiseList.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );
  return Promise.all(mappedPromises);
};

myPromiseAllSettled([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
