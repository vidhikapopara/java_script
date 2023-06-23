// // 'use strict';
// //it is used for the show bugs

// let teamswork = true
// let employee = false
// if(teamswork) {
//     employee = true      //employe and employee show the propar bug
// }
// if(employee){
//     console.log('lets start team work')
// }


// myFunction();
// let y;
// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }


// x = 3.14;       // This will not an error.
// myFunction();
// function myFunction() {
// //   "use strict";
//   y = 3.14;   // This will an error
// }


//  //throw an error
//  x = {p1:10, p2:20};


//  let a = 3.14;
// // Deleting a function is not allowed
//  //function a(p1, p2) {};
//  //throw an error
//  delete a; 


// //  'use strict';
//  //throw an error octal number
// //  let x = 010; 
//  let x = \010;




 //FUNCTION
 function names()
 {
    console.log('my name is vidhi')
 }
 names();


 function marks(sub1,sub2){
    console.log(`math marks ${sub1}`)
    console.log(`science marks ${sub2}`)
    console.log(`total marks ${sub1+sub2}`)
 }
 marks()
 marks(58)
 marks(34,54)


 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  let value = toCelsius(77);
  console.log(value)


  function toCelsiues(fahrenheits) {
    return (5/9) * (fahrenheits-32);
  }
  let values = toCelsiues();
  console.log(values)


  //used as variable
  let x = toCelsius(77);
let texts = "The temperature is " + x + " Celsius";

  let text = "The temperature is " + toCelsius(77) + " Celsius";


  function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make); 


  function myFunc(theArr) {
    theArr[0] = 30;
  }
  const arr = [45];
  console.log(arr[0]);
  myFunc(arr);
  console.log(arr[0]);


  console.log(square(5));
  function square(n) {
    return n * n;
  }



  //ARROW FUNCTION
const addNumbers = (a, b) => a + b;
console.log(addNumbers(43,76))


const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3);


 let hello = val => "Hello " + val;
console.log(hello('welcome'))


function multiplyByTwo(n, callback) {
    var result = n * 2;
    callback(result);
  }
  function logResult(result) {
    console.log(result);
  }
  multiplyByTwo(5, logResult);



  //palindrom
  function checkpelin(str = string)
  {
    console.log(str.length)
    if(length <= 1){
        console.log('enter big string')
    }
    else{
        console.log('go for the check string')
    }
  }
  checkpelin('aabb')