let marks="BC";
if(marks=="AA")
    {
            console.log("grater than 90")
    }
else if(marks=="AB")
{
    console.log("greater than 80 and less than or equal to 90")
}
else if(marks=="BB")
{
    console.log("greater than 70 and less than or equal to 80")
}
else if(marks=="BC")
{
    console.log("greater than 60 and less than or equal to 70")
}
else if(marks=="CC")
{
    console.log("greater than 50 and less than or equal to 60")
}
else if(marks=="CD")
{
    console.log("greater than 40 and less than or equal to 50")
}
else if(marks=="DD")
{
    console.log("greater than 30 and less than or equal to 40")
}
else if(marks=="FF")
{
    console.log("less than or equal to 30")
}




//odd or even number
function oddeven(num){
    if(num%2==0)
    {
        console.log("even number");
    }
    else
    {
        console.log("odd number");
    }
}
oddeven(10)
oddeven(5)



//chech input is number or not
function no(numb){
    if(isNaN(numb)) //isNaN is for check not a number
    {
        console.log("it is not number")
    }
    else{
        console.log("it is number")
    }
}
no(10)
no("abc")




//find the largest numberr
function largest(n1,n2){
    if(n1>n2)
    {
        console.log(`${n1} is largest`)
    }
    else if(n2>n1)
    {
        console.log(`${n2} is largest`)
    }
    else if(n1==n2)
    {
        console.log("number are equal to")
    }
}
largest(10,20)
largest(40,20)
largest(3,3)



//find the largest from 3 number
function from3(n1,n2,n3)
{
    if(n1>n2 && n1>n3) 
    {
        console.log(`${n1} is largest`)
    }
    else if(n2>n1 && n2>n3)
    {
        console.log(`${n2} is larget`)
    }
    else if(n3>n1 && n3>n2)
    {
        console.log(`${n3} is largest`)
    }
}
from3(2,1,4)
from3(1,5,3)




//given number is in range or not
function inrange(n,start,end)
{
    if(n>=start && n<=end){
        console.log("in range")
    }
    else{
        console.log("not in range")
    }
}
inrange(15,10,20)
inrange(11,1,10)



//perform arithmetic operation
function arithoper(n1,n2,opera)
{
    if(opera=="add")
    {
        console.log(n1+n2);
    }
    else if (opera=="sub")
    {
        console.log(n1-n2);
    }
    else if(opera=="div")
    {
        console.log(n1/n2);
    }
    else if(opera=="mod")
    {
        console.log(n1%n2);
    }
}
arithoper(10,20,"add")
arithoper(20,10,"sub")
arithoper(10,2,"div")
arithoper(10,3,"mod")



//given year is leap year or not
function checkyear(year)
{
    if(year%4==0 && year%100 != 0 || year%400 == 0)
    {
        console.log(`${year} is leap year`)
    }
    else{
        console.log(`${year} is not leap year`)
    }
}
checkyear(2023)
checkyear(2024)



//find the grade from marks
function marksgrade(marks)
{
    if(marks>=90 && marks<=100)
    {
        console.log("s grade")
    }
    else if(marks>=80 && marks<=90){
        console.log("a garde")
    }
    else if(marks>=70 && marks<=80)
    {
        console.log("b grade")
    }
    else if(marks>=60 && marks<=70)
    {
        console.log("c grade")
    }
    else if(marks>=50 && marks<=60)
    {
        console.log("f grade")
    }
}
marksgrade(79)
marksgrade(90)
marksgrade(55)



//find number of days in given month
function isLeapYear(year){

    return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
  }
  
  function findDaysInMonth(month, year) {
  
    if(month < 1 || month > 12){
      console.log(`Invalid Month of value ${month}`)
      return;
    }
  
    if(month ==2){
      if(isLeapYear(year)){
         console.log(`The Month has 29 days`)    
      }
      else{
         console.log(`The Month has 28 days`)    
      }
    }
    else if(month == 4 || month == 6 || month == 9 || month== 11){
       console.log(`The Month has 30 days`)    
    }
    else{
       console.log(`The Month has 31 days`)
    }
  }
  
  findDaysInMonth(2, 2023) 
  findDaysInMonth(2, 2024) 
  findDaysInMonth(4, 2023) 
  findDaysInMonth(10, 2024) 