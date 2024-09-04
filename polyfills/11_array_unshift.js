const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.unshift('Lemon', 'Pineapple');

console.log(fruits);

Array.prototype.myUnshift = function (...elements) {
  if (this == null) {
    throw new TypeError('this is not defined');
  }
  const addLength = elements.length;
  if (addLength === 0) {
    return length;
  }
  let length = this.length | 0;
  for (let i = length - 1; i >= 0; i--) {
    this[i + addLength] = this[i];
  }
  for (let i = 0; i < addLength; i++) {
    this[i] = elements[i];
  }
  const newLength = length + addLength;
  this.length = newLength;

  return newLength;
};

fruits.myUnshift('Kiwi', 'Sapota');
console.log(fruits);
