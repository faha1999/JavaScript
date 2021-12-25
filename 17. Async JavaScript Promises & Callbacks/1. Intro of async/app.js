const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  //let positionData;
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })

  // // error handling with catch method
  // .catch((err) => {
  //   console.log(err);
  //   return 'allow location';
  // })

  // // another method OF error handling
  // getPosition()
  // .then(
  //   (posData) => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // )

  // .then((data) => {
  //   console.log(data, positionData);
  // });
  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log('Getting position ...........');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 1000000000; i++) {
//   result += i;
// }

// console.log(result);
