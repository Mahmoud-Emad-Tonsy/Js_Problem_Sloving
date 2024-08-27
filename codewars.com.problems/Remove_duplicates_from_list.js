/*
-Using For loop
-Using Build in functions
*/

function distinct(arr) {
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        arr.sort();
        if(arr[i] == arr[i + 1]){
            arr.shift()
            i--;
        }else 
        result.push(arr[i])
    }
   
    
    return result
}

// function distinct(arr) {

//     let uniqueSet = new Set(arr);
//     let result = Array.from(uniqueSet);
//     console.log(result)
//     return result;
// }
