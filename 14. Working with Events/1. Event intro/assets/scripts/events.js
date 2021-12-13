// const button = document.querySelector('button');

// // button.onclick = function() {

// // }

// const buttonClickHandler = () => {
//   alert('Button was clicked!');
// };

// const anotherButtonClickHandler = () => {
//   console.log('Button was clicked!');
// };

// // button.onclick = buttonClickHandler;
// // button.onclick = anotherButtonClickHandler;

// // button.addEventListener('click', buttonClickHandler);

// // setTimeout(() => {
// //   button.removeEventListener('click', buttonClickHandler);
// // }, 2000);

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//   button.removeEventListener('click', boundFn);
// });

// // the event object

const buttons = document.querySelectorAll('button');

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('Button was clicked!');
};

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// });

buttons.forEach((btn) => {
  btn.addEventListener('mouseenter', buttonClickHandler);
});

window.addEventListener('scroll', (event) => {
  console.log(event);
});
