const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

Array.prototype.myPush = function (...elements) {
  if (this == null) {
    throw new TypeError('this is not defined');
  }

  let length = this.length | 0;
  let newLength = this.length + elements.length;
  if (newLength > Number.MAX_SAFE_INTEGER) {
    throw new TypeError('The number of array is over the MAX_SAFE_INTEGER');
  }

  for (let i = 0; i < elements.length; i++) {
    this[length] = elements[i];
    length++;
  }
  return this;
};

arr.myPush(6, 7, 8);
console.log(arr);
