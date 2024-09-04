const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
Array.prototype.customJoin = function (separator = ',') {
  // If the array is empty, return an empty string
  if (this.length === 0) {
    return '';
  }

  // Start with the first element as it won't be prefixed with the separator
  let result = String(this[0]); //ex: "apple"

  // Loop through the array starting from the second element (ex: iteration starts from i=1)
  for (let i = 1; i < this.length; i++) {
    result += String(separator) + String(this[i]);
  }

  return result;
};

console.log(fruits.join());
