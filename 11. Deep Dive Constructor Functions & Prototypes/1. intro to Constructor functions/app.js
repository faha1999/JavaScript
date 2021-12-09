// START using class
// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// const person = new Person();
// person.greet();

//  Start Constructor function
function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};

console.dir(Person);

// const person = new Person();
const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);
