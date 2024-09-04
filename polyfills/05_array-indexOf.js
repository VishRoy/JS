// Array.indexOf

const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Apple'];
let index = fruits.indexOf('Apple');

console.log(index);

Array.prototype.myIndexOf = function (searchItem, fromIndex = 0) {
  if (this == null) {
    throw new TypeError('"this" is null or not defined');
  }

  if (fromIndex > this.length) return -1;

  let startIndex = Math.max(
    fromIndex >= 0 ? fromIndex : this.length - Math.abs(fromIndex),
    0
  );

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === searchItem) {
      return i;
    }
  }
  return -1;
};

let ind = fruits.myIndexOf('Apple');
let negIndex = fruits.myIndexOf('Apple', -1);

console.log(ind, negIndex);
