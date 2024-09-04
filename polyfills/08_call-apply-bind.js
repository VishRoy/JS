// call, apply and bind

const person1 = {
  name: 'Vishakha Roy',
};

const person2 = {
  name: 'Anahita Pandey',
};
const person3 = {
  name: 'Amit Kumar',
};

function getDetails(city, state) {
  return `${this.name} is from ${city}, ${state}`;
}

console.log(getDetails.call(person1, 'Kolkata', 'WB'));

console.log(getDetails.apply(person2, ['Kolkata', 'WB']));

console.log(getDetails.bind(person3, 'Lucknow', 'UP')());

// Polyfill

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'cannot be bound');
  }
  context.Fn = this;
  return context.Fn(...args);
};

console.log(getDetails.myCall(person1, 'Kolkata', 'WB'));

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'cannot be bound');
  }
  if (!Array.isArray(args)) {
    throw new TypeError('Not an array');
  }
  context.Fn = this;
  return context.Fn(...args);
};

console.log(getDetails.myApply(person2, ['Kolkata', 'WB']));

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'cannot be bound');
  }
  context.Fn = this;
  return function (...args2) {
    return context.Fn(...args, ...args2);
  };
};

console.log(getDetails.myBind(person3, 'Lucknow', 'UP')());
