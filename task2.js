function splitarray(arr, parts, current, start) {
    //length of the array and add new length
    if (current.length === arr.length / 2) {
      parts.push(current.slice());
      //elements of array in new array.
      return;
    }
  
    for (var i = start; i < arr.length; i++) {
      current.push(arr[i]);
      splitarray(arr, parts, current, i + 1);
      current.pop();
      //change the original array
    }
  }

function splitdisplay(arr) {
    console.log('array length',arr.length)
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          //console.log(arr[i] + " is a number");
          if(arr.length%2 == 0)
          {
              //console.log("valid array")
          }
          else{
              console.log("please, enter valid array of even legth")
          }
        } else {
          console.log(arr[i] + " is not a number");
        }
      }
    var allpart = [];
    splitarray(arr, allpart, [], 0);
  
    //function call for all element array
    allpart.forEach(function(part) {
        //separator specified
        console.log( part.join(', '));

    });
  }

  splitdisplay([1, 2, 2,1]);