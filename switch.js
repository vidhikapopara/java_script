//switch case
//work as a else if statements

let days='monday'
switch(days){
    case 'monday':      //day === 'monday'
        console.log('start the work')
        break;
    case 'tuesday':
        console.log('find the task')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('continue to search and wroking')
        break;
    case 'friday':
        console.log('finish all task and done')
        break;
    case 'saturday':
    case 'sunday':
        console.log('holiday enjoy.....')
        break;
    default :
        console.log('invalide data')
}




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

  const food = "ice cream";
switch (food) {
  case "cake":
    console.log("I like cake");
    break;
  case "pizza":
    console.log("I like pizza");
    break;
  default:
    console.log("I like all foods");
    break;
  case "ice cream":
    console.log("I like ice cream");
    break;
}



  //task

  let price = 200
  let disccount = price <= 300 && price >= 50 ? price * 0.5 : price * 0.2
  console.log(`the price is ${price} and ${disccount} is total proce is ${price + disccount}`)