// Array.some

const ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age > 18;
}

console.log(ages.some(checkAdult));

Array.prototype.mySome = function (cb) {
  if (this == null) throw new TypeError('this is undefined');
  if (this.length === 0) return false;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) return true;
  }
  return false;
};

console.log(ages.mySome(checkAdult));
