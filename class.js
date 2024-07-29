// Class based approach.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
      return this.firstName + ' ' + this.lastName;
    };
  }
}

Person.prototype.getName = function () {
  return this.firstName;
};

const person1 = new Person('Vishakha', 'Roy', 30);
const person2 = new Person('Anahita', 'Pandey', 1);

console.log(person1);
console.log(person2.fullName());
console.log(person1.getName());

class Child extends Person {
  constructor(firstName, lastName, age, city, state) {
    super(firstName, lastName, age);
    this.city = city;
    this.state = state;
  }
}

const child1 = new Child('Anahita', 'Pandey', 1, 'Kolkata', 'West Bengal');
const child2 = new Child('Aayansh', 'Pandey', 5, 'Lucknow', 'UP');

console.log(child1);
console.log(child2.getName());
