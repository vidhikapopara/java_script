//type conversion 

let bornyear='2002'
console.log(bornyear+18)
console.log(bornyear+2+3)
console.log(2+3+bornyear)

let currentyear='2023'
console.log(Number(currentyear) - 21) //Number() is covert string to number

let x=111
console.log(String(111))
console.log(typeof x)




//type coercion

console.log('i am ' + 20 + ' year old.')
console.log("i am " + 20 + " years old." )
console.log('i am ' + '20' + ' year old.')

console.log('23'-'10'-3)
console.log('23'+'10'+3)
console.log('10' * '5')
console.log('2' / '10')
console.log('23' > '30')

let n='1' + 1 //11
n=n-1
console.log(n)



// fasly values : 0, '' , undefined , null , NaN

console.log(Boolean(0))
console.log(Boolean())
console.log(Boolean(undefined))
console.log(Boolean('vidhi'))
console.log(Boolean({}))        //object
console.log(Boolean([]))        //array

let money = 0;
if(money){
    console.log("you have a money")
}
else{
    console.log("you don not have a money")
}


let age=20;
if(age){
    console.log("age is given")
}
else{
    console.log("not given")
}