// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
// resolve("Success")
//   reject("Some error");
// });

//=>
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Success");
//     // reject("Network error");
//   });
// };
// let promise = getPromise();
// promise
//   .then((res) => {
//     console.log("Promise fulfilled", res);
//   })
//   .catch((err) => {
//     console.log("Rejected", err);
//   });

//=>
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data1");
//       resolve("Sucess");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data");
//       resolve("Sucess");
//     }, 4000);
//   });
// }

// console.log("Fetching Data1");
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("Fetching Data2");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data =", dataId);
      if (dataId === 4) {
        reject("Error at data " + dataId);
      } else {
        resolve("Success" + dataId);
      }
    }, 2000);
  });
}
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
    return getData(4);
  })
  .catch((err) => {
    console.log("Caught:", err);
  });
