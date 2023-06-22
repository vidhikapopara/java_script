// boolean logic
//AND*     OR-    NOT     EOR  


let a = true
let b = false

console.log(a & b)
console.log(a | b)
console.log(!b)
console.log(a ^ b)

console.log(1 && 0) 

console.log(1 || 0)

console.log(null || 1)

//check left to right and if the result is true or flase print last value
console.log(1 && 2 && 4 && 3)

//check left to right and if the result is true print first value if flase than print last value
console.log(1 || 2 || 4 || 2)
console.log(0 || 0 || 0)


//check the given number is positive or negative

function checknum(n1,n2)
{
    // if(n1 > 0 && n2 > 0)
    // {
    //     console.log(`${n1} and ${n2} both number is positive`)
    // }
    // else if(n1 < 0 && n2 < 0)
    // {
    //     console.log(`${n1} and ${n2} both number is negative`)
    // }
    // else if(n1 == 0 && n2 == 0)
    // {
    //     console.log(`${n1} and ${n2} both number is zero`)
    // }
    // else if(n1 > 0 || n2 > 0)
    // {
    //     console.log(`one or both positive`)
    // }
    // else if(n1 < 0 || n2 < 0)
    // {
    //     console.log(`one number or both number negative`)
    // }
    // else if(n1 == 0 || n2 ==0)
    // {
    //     console.log('one or noth zero')
    // }
    if(n1,n2) 
    {
        if(n1 > 0){
            console.log(`${n1} is positive`)
        }
        if(n1 < 0){
            console.log(`${n1} is negative`)
        }
        if(n1 == 0){
            console.log(`${n1} is zero`)
        }
        if(n2 > 0){
            console.log(`${n2} is positive`)
        }
        if(n2 < 0){
            console.log(`${n2} is negative`)
        }
        if(n2 == 0){
            console.log(`${n2} is zero`)
        }
    }
    if(n1)
    {
        console.log('you enter only one number')
        if(n1 > 0){
            console.log(`${n1} is positive`)
        }
        if(n1 < 0){
            console.log(`${n1} is negative`)
        }
        if(n1 == 0){
            console.log(`${n1} is zero`)
        }
    }
    if(n1==null)
    {
        console.log('please enter number')
    }
}
checknum()



let val = false;
let result = val && 0 + 3;
console.log(result);

let val1 = false;
let result1 = val || 0 + 3;
console.log(result1);

let num = 1 && 2 && false && 3;
console.log(num);

let num1 = "" ||false || NaN || 0;
console.log(num1);

let condition = false || ! true && true;
console.log(condition); //evalution way id ! -->  && -->  ||




//task
let boysmarks = (90 + 87 + 81) / 3
let girlsmarks = (90 + 87 + 81) / 3

console.log(boysmarks,girlsmarks)

if(boysmarks > girlsmarks && boysmarks >=60)
{
    console.log('boys are smart')
}
else if(boysmarks < girlsmarks && girlsmarks >= 60){
    console.log('girls is smarts')
}
else if(boysmarks === girlsmarks && boysmarks >=60 && girlsmarks >= 60)
{
    console.log('all are smart')
}
else{
    console.log('all are looser')
}



//statments vs expresion

//function and class is also used as expresion and statment

let multi = function(a ,b){
    return a* b;
}
multi(23,45)



//tarnary or conditional operator
//work same as a if else

let marks = 70
marks >= 60 ? console.log('you are win') : console.log('you are not win')

let win= marks >= 70 ? 'yes win' : 'not win'
console.log(win)

console.log(`i want ${marks >= 70 ? 'yes win' : 'not win'}`)

function getFee(isMember) {
    return (isMember ? '2.00' : '10.00');
  }
  console.log(getFee(true));  
  console.log(getFee(false));  
  console.log(getFee(null));


  let markss = 50;
    let results = (markss < 40) ? "Unsatisfactory" :
        (markss < 60) ? "Average" :
            (markss < 80) ? "Good" : "Excellent";
 
    console.log(results);