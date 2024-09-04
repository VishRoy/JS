// Array.forEach
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = (a, b) => a + b;

ratings.forEach((rating) => {
  console.log(rating);
});

// console.log(sum);
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

ratings.myForEach((rating) => console.log(rating * 3));
