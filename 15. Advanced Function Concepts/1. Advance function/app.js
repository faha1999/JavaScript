// // pure function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// // Impure function

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// // function side-effects

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'cooking'];

function printHobbies(h) {
  h.push('New Hobby');
  console.log(h);
}

printHobbies(hobbies);
