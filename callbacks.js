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

//Q1) Write a function greetUser(name, callback) that:
// prints "Hello <name>"
//then calls the callback which prints "Welcome!"
function greetUser(name, callback) {
  console.log("Hello", name);
  callback();
}
greetUser("Tanzeela", () => {
  console.log("Welcome!");
});

// Q2) Write a function calculate(a, b, callback)
// that sends a + b to the callback
// callback should print the result
function calculate(a, b, callback) {
  callback(a + b);
}
calculate(2, 3, (result) => {
  console.log(result);
});

// Q3) Write a function delayMessage(msg, callback)
// that prints msg after 2 seconds
// then calls the callback which prints "Done"
function delayMessage(msg, callback) {
  setTimeout(() => {
    console.log(msg);
    callback();
  }, 2000);
}
delayMessage("Hello", () => {
  console.log("Done");
});

// Q4) Write a function fetchUser(id, callback)
// that after 2 seconds prints "User <id> fetched"
// then calls the callback
// Use it to fetch users 1 → 2 → 3 in order
function fetchUser(id, callback) {
  setTimeout(() => {
    console.log("User", id, "fetched");
    callback();
  }, 2000);
}
fetchUser(1, () => {
  fetchUser(2, () => {
    fetchUser(3, () => {});
  });
});

function fetchUser(id, callback) {
  setTimeout(() => {
    console.log("User", id, "fetched");
    callback();
  }, 2000);
}
fetchUser(1, () => {
  fetchUser(2, () => {
    fetchUser(3, () => {});
  });
});

// Q5) Write a function sayHello(name, callback) that:
// Prints "Hello <name>!"
// Then calls the callback which prints "Have a nice day!"
function sayHello(name, callback) {
  console.log("Hello", name);
  callback();
}
sayHello("Tanzeela", () => {
  console.log("Have a nice day!");
});

// Q6) Delayed Print:- Write a function delayedPrint(msg, delay, callback) that:
// Prints msg after delay milliseconds
// Then calls the callback, which prints "Done waiting"
function delayedPrint(msg, delay, callback) {
  setTimeout(() => {
    console.log(msg, "World!");
    callback();
  }, delay);
}
delayedPrint("Hello", 2000, () => {
  console.log("Done waiting");
});

// Q7) Write a function called delayedMessage(msg, delay, callback) that:
// Prints the message msg after delay milliseconds.
// Calls the callback after the message is printed.
// Using this function, print three messages in order:
// "Message 1" after 1 second
// "Message 2" 1 second after Message 1
// "Message 3" 1 second after Message 2
// Finally, print "All done!" after the third message
// Constraints: You must use callbacks to maintain the order
function delayedMessage(msg, delay, callback) {
  setTimeout(() => {
    console.log(msg);
    callback();
  }, delay);
}
delayedMessage("Message 1", 1000, () => {
  delayedMessage("Message 2", 1000, () => {
    delayedMessage("Message 3", 1000, () => {
      delayedMessage("All done!", 1000, () => {});
    });
  });
});

// Q8) Write a function multiply(a, b, callback) that:
// Multiplies a * b
// Sends the result to the callback
// Callback prints: "The result is <result>"
function multiply(a, b, callback) {
  callback(a * b);
}
multiply(2, 4, (result) => {
  console.log(`The result is ${result}`);
});

// Q9) Write a function countdown(n, callback) that:
// Prints numbers from n to 1
// Each number after 1 second delay
// After finishing, calls the callback, which prints "Countdown finished!"

function countdown(n, callback) {
  for (let i = n; i >= 1; i--) {
    setTimeout(
      () => {
        console.log(i);
        if (i === 1) {
          callback();
        }
      },
      (n - i + 1) * 1000,
    );
  }
}
countdown(5, () => {
  console.log("Countdown finished!");
});

// function cookRajma(no, callback) {
//   setTimeout(() => {
//     console.log("Step", no, ":-");
//     callback();
//   }, 3000);
// }

// cookRajma(1, () => {
//   console.log("Soak rajma overnight in water.");
//   cookRajma(2, () => {
//     console.log("Drain the water.");
//     cookRajma(3, () => {
//       console.log(
//         "Pressure cook rajma with fresh water, salt, and turmeric until soft.",
//       );
//       cookRajma(4, () => {
//         console.log("Heat mustard oil until it smokes, then lower the flame.");
//         cookRajma(5, () => {
//           console.log("Add hing and crushed garlic.");
//           cookRajma(6, () => {
//             console.log(
//               "Add Kashmiri red chilli powder and dry ginger powder.",
//             );
//           });
//         });
//       });
//     });
//   });
// });
