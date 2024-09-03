// Array.includes

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes('3'));
console.log(arr.includes(6));

Array.prototype.myIncludes = function (searchElement, startIndex = 0) {
  if (!this) {
    throw new TypeError('this is not defined');
  }
  if (this.length === 0) return false;
  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === searchElement) return true;
  }
  return false;
};

let arr2 = [1, 2, 3, 4, 5, 6, 7, 9, 5];
let arr3 = ['a', 'b', 'c'];

console.log(arr2.myIncludes('2'));
console.log(arr2.myIncludes(5, 5));
console.log(arr3.includes('a'));
