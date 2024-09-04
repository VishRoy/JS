// Array.isArray
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(Array.isArray(fruits));

Array.myArray = function (input) {
  return Object.prototype.toString.call(input) === '[object Array]';
};

console.log(Array.myArray(fruits));

console.log(Array.myArray({}));
