//Solving a question using CallBacks:-
//  function getDataCallBack(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data=", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// console.log("Getting Data 1........");
// getDataCallBack(1, () => {
//   console.log("Getting Data 2......");
//   getDataCallBack(2, () => {
//     console.log("Getting Data 3......");
//     getDataCallBack(3, () => {
//       console.log("Getting Data 4......");
//       getDataCallBack(4);
//     });
//   });
// });

//Solving the same using Promises:-
// function getDataPromise(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data=", dataId);
//       if (dataId === 3) {
//         reject("Network error at Data" + dataId);
//       } else {
//         resolve("Success at" + dataId);
//       }
//     }, 2000);
//   });
// }
// console.log("Getting Data 1");
// getDataPromise(1)
//   .then((res) => {
//     console.log("Getting Data 2");
//     return getDataPromise(2);
//   })
//   .then((res) => {
//     console.log("Getting Data 3");
//     return getDataPromise(3);
//   })
//   .then((res) => {
//     console.log("Getting Data 4");
//     return getDataPromise(4);
//   })
//   .catch((err) => {
//     console.log("Catch:", err);
//   });

//Solving the same using Async-await:-
// function getDataAsync(dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data=", dataID);
//       resolve("Success");
//     }, 2000);
//   });
// }
// async function getAllData() {
//   console.log("Getting Data 1.......");
//   await getDataAsync(1);
//   console.log("Getting Data 2......");
//   await getDataAsync(2);
//   console.log("Getting Data 3.....");
//   await getDataAsync(3);
// }
// getAllData();

//Solving the same using IIFE(Immediately Invoked Function Expression):-
function getDataAsync(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data=", dataID);
      resolve("Success");
    }, 2000);
  });
}
(async function () {
  console.log("Getting Data 1.......");
  await getDataAsync(1);
  console.log("Getting Data 2......");
  await getDataAsync(2);
  console.log("Getting Data 3.....");
  await getDataAsync(3);
})();
