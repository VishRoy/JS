const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.pop();
console.log(fruits);

Array.prototype.myPop = function () {
  if (this == null) {
    throw new TypeError('this is not defined');
  }
  if (this.length === 0) return undefined;
  const removedElement = this[this.length - 1];
  this.length = this.length - 1;
  return removedElement;
};

fruits.myPop();
console.log(fruits);
