const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
Array.prototype.myFill = function (
  element,
  startIndex = 0,
  endIndex = this.length
) {
  if (this.length === 0) return -1;
  for (let i = startIndex; i < endIndex; i++) {
    this[i] = element;
  }
  return this;
};

console.log(fruits.myFill('Kiwi', 2, 4));
