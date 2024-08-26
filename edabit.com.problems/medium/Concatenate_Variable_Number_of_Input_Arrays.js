/*
Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
*/



function concat(...args) {

 let newArr = []
 for(let i = 0 ; i < args.length ; i++) {
      args[i].map((e)=> newArr.push(e))

 }

return newArr
	
}
