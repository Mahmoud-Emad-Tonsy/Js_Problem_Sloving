/*
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0


  true  => 1 
  false => 0
*/
function countTrue(arr) {


    // return arr.reduce((acc, cur) => acc + cur)

    let countArr = [];
    for (let i = 0; i < arr.length; i++) {

        countArr.push(arr[i])
        console.log(countArr);

    }


    return countArr
}
console.log(countTrue([true, false, false, true, false]))
