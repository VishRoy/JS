Array.prototype.customAt = function (index = 0) {
  if (index < 0) {
    index = this.length + index;
  }
  if (index < 0 || index >= this.length) {
    return undefined;
  }
  return this[index];
};

console.log(fruits.customAt(-1));
