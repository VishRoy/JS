// Create a constructor function Person(parent) and create a child function inheriting from parent. Add prototype function

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

Person.prototype.getName = function () {
  return this.firstName;
};

const person1 = new Person('Vishakha', 'Roy', 30);
const person2 = new Person('Anahita', 'Pandey', 1);

console.log(person1.getName());
console.log(person2.fullName());

function ChildPerson(firstName, lastName, age, city, state) {
  Person.call(this, firstName, lastName, age);
  this.city = city;
  this.state = state;
}

ChildPerson.prototype = Object.create(Person.prototype);

const child1 = new ChildPerson(
  'Anahita',
  'Pandey',
  1,
  'Kolkata',
  'West Bengal'
);

console.log(child1.getName());
