// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// start
//////// push(), pop(), unshift(), shift() - Adding & Removing Elements //////

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'coding';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removeElement = hobbies.splice(-2, 1);
// console.log(hobbies);

// start
//// Selecting Ranges & Creating Copies with slice() ////
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(2);

testResults.push(5.91);

console.log(storedResults, testResults);
