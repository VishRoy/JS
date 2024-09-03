// Array.every

const ages = [3, 10, 18, 20];
const newAges = [32, 33, 20, 40];
function checkAge(age) {
  return age > 18;
}
console.log(ages.every(checkAge));
console.log(newAges.every(checkAge));

Array.prototype.myEvery = function (cb) {
  if (this == null) throw new TypeError('this is undefined');
  if (this.length === 0) return false;
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) return false;
  }
  return true;
};

console.log(ages.myEvery(checkAge));
console.log(newAges.myEvery(checkAge));
