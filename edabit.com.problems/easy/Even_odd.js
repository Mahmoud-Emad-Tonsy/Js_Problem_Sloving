
//Task:
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

function EvenOrOdd(array) {



    var sumArray = array.reduce((acc, curr) => acc + curr)
    if (sumArray % 2 == 0) {

        return 'even'
    } else return 'odd'

}

//using Ternary Operator
function EvenOrOddTernaryOperator(array) {

    return array.reduce((acc, curr) => acc + curr, 0) % 2 ? 'odd' : 'even'

}


console.log(EvenOrOdd([0, 1, 4, 1]));
console.log(EvenOrOddTernaryOperator([0, 1, 4, 1]));