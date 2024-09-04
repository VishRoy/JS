const ages = [3, 10, 18, 20];
const ages2 = [80, 30, 40, 50];
const ages3 = [3, 5, 6, 7];

function checkAge(age) {
  return age > 18;
}

console.log(ages.findIndex(checkAge));

Array.prototype.customFind = function (callbackFn) {
  if (this === null) {
    throw new TypeError('this is not defined');
  }
  if (typeof callbackFn !== 'function') {
    throw new TypeError('callback must be a function');
  }
  if (this.length === 0 || !Array.isArray(this)) return -1;

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return this[i];
    }
  }

  return undefined;
};

console.log(ages.customFind(checkAge));

console.log(ages2.customFind(checkAge));

console.log(ages3.customFind(checkAge));
