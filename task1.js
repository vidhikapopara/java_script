function CountWaysToSplit(str)
{
    if(typeof str === 'string')
    {
        console.log(`your string is ${str}`)
        if(str.length >= 3 && str.length <= 100){
            console.log('valid string')
        }

        let count = 0;
        if(str.length >= 3){
            // console.log('part')
            len = str.length;
            for(let i=1 ; i < len ; i ++) 
            {
                for(let j = i + 1 ; j < len ; j++){
                    const a = str.substring(0 , i) // used for the extracts charters from 2 position
                    console.log('a is' , a)

                    const b = str.substring(i , j)
                    console.log('b is' , b)

                    const c = str.substring(j)
                    console.log('c is' , c)
    
                    console.log('---')
                    console.log('concatination')

                    const ab = a + b
                    console.log('a + b is : ', ab)

                    const bc  = b + c
                    console.log('b + c is : ', bc)

                    if(ab == bc){
                        console.log('not counted')
                        count --;
                    }

                    const ca  = c + a
                    console.log('c + a is : ' , ca)
                    if(ab == ca){
                        console.log('not counted')
                        count --;
                    }
                    
                    console.log('---')

                    
                count ++

                }
            }
            console.log('count',count)
        }

        else{
            console.log('enter long length string')
        }
    }
    
    else{
        console.log('please enter valid string')
        }
    }


CountWaysToSplit("zzzzz")
// CountWaysToSplit(12)

