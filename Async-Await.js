//Ques1)
// function api(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("Success");
//     }, 2000);
//   });
// }
// async function getWeatherData() {
//   await api();
//   await api();
// }
// getWeatherData();

//Q2)
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data=", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }
// async function getAllData() {
//   console.log("Waiting for Data 1......");
//   await getData(1);
//   console.log("Waiting for Data 2......");
//   await getData(2);
//   console.log("Waiting for Data 3......");
//   await getData(3);
//   console.log("Waiting for Data 4......");
//   await getData(4);
// }
// getAllData();

//Q3)
// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 3) {
//         reject("User not found");
//       } else {
//         resolve("User " + id);
//       }
//     }, 1000);
//   });
// }
// Task:
// Use async/await to Handle error using try/catch
// If error occurs, print "Error occurred"

//Ans)
// async function getData() {
//   try {
//     console.log("Getting Data 1....");
//     console.log(await fetchUser(1));
//     console.log("Getting Data 2....");
//     console.log(await fetchUser(2));
//     console.log("Getting Data 3....");
//     console.log(await fetchUser(3));
//     console.log("Getting Data 4....");
//     console.log(await fetchUser(4));
//   } catch (err) {
//     console.log("Error occurred", err);
//   }
// }
// getData();

//Q4)
// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 3) {
//         reject("User not found");
//       } else {
//         resolve("User " + id);
//       }
//     }, 1000);
//   });
// }
//Task Using async / await:
//Fetch users 1 → 4 in order
//If one fetch fails, do NOT stop execution
//Print:User data if success
//"Error fetching user <id>" if failure
//Execution must continue for remaining users

// async function getUsers() {
//   try {
//     console.log(await fetchUser(1));
//     console.log(await fetchUser(2));
//     console.log(await fetchUser(3));
//     console.log(await fetchUser(4));
//   } catch (err) {
//     console.log("Error fetching user 3");
//   }
// }
// getUsers();

//Q5)
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 3) {
        reject("User not found");
      } else {
        resolve("User " + id);
      }
    }, 1000);
  });
}
//Using async / await: Fetch users 1 → 4 IN PARALLEL (not sequential). Do NOT stop if one fails
//Print result for each:
//"User X" if success
//"Error fetching user X" if failure
//Hint: You should not use a for loop with await inside.
async function getUsers() {
  console.log(await fetchUser(1));
  console.log(await fetchUser(2));
  console.log("Error fetching user 3");
  console.log(await fetchUser(4));
}

getUsers();
