const button = document.querySelector('button');

// button.onclick = function() {

// }

const buttonClickHandler = () => {
  alert('Button was clicked!');
};

const anotherButtonClickHandler = () => {
  console.log('Button was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
});
