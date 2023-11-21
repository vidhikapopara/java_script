//1;
let promise = new Promise(function (resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a GEEK");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });

//2;
let promise = new Promise(function (resolve, reject) {
  resolve("Geeks For Geeks");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

//3;
let promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  }
);

//4;
let promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });

//5;
function myDisplayer(some) {
  console.log("demo");
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

//6;
function myDisplayer(some) {
  console.log("demo");
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//7;
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("hello");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
