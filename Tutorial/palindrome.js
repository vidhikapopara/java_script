function palindrome(str){
    len = str.length;
    j = str.length - 1;
    for ( i = 0; i < j / 2; i++) {
         x = str[i];
         y = str[j - i];
         if (x == y) {
            console.log("it is palindrome")
        }
        
    }

     console.log( 'It is a palindrome');
 
}


str = "abcdacba"
palindrome(str)


// str = "asdfas"
// len = str.length
// console.log(len)
// console.log(len- 1)

