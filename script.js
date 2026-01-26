console.log("one");
console.log("two");
setTimeout(() => {
  console.log("three");
}, 2000);
console.log("four");
console.log("five");

const sum = (a, b) => {
  return a + b;
};
function calculator(a, b, operation) {
  return operation(a, b);
}
console.log(calculator(2, 3, sum));

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data dataID");
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
