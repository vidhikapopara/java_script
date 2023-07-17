//variable and value

// let age=19
// let gender='female'
// let course='computer'
// console.log(age,'\n',gender);





//data type

// let name=false;
// let email='vidhi123@'
// let age=19
// let language
// console.log(typeof name);
// console.log(typeof email);
// console.log(typeof age);
// console.log(typeof language);





//let,const,var

x=5 //automaticalty
let y=10  //you can change the value ,must declare before use,multiple time you can use the same name vbariable name
const z=15 //contantly stored you cannot change this value,must declare before use
var a=1   //it is used in old browser, multipale time you can not use variable name
//let and const declare in {{{{}}}} you not use outside of this block




//operators
let b=2     //assign value to variable
let c=4     
let d=b+c;
let u=b-c;
let v=b*c;
console.log(d, u)
//assignement operater +, - , * , ** , / , % , ++ , -- ,= ,+=, -=, *=, /=, %=, **=
//comparison operater ==, ===, !=, !==, >, <, >=, <= ,?
//bitwise operater  &, |, ~, ^, <<, >>, >>>




//strings and templete literals
let computer="cpu"
let cpu="mouse"
const string=`this is ${computer} , and this is ${cpu}`;
console.log(string);




//if, if/else, else/if
let q=10;
let w=20;
if(q>w)
{
    console.log(`${q} is big `);
}
else{
    console.log(`${w} is big`)
}





//switch
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  console.log(day)



  //basic of function
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  let result = myFunction(4, 3);
  console.log(result)



  //array
  let name=["vidhi","isha","jinal"]
  console.log(name);