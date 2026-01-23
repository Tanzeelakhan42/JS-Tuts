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

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
