const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const arr = [1, 2, 3, 4];
Array.prototype.myConcat = function (...elements) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
  }

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    if (Array.isArray(arg)) {
      for (let j = 0; j < arg.length; j++) {
        result.push(arg[j]);
      }
    } else {
      result.push(arg);
    }
  }
  return result;
};

console.log(fruits.myConcat(arr, arr));
