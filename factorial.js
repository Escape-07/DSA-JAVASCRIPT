// function factorial(n) {
//     if (n == 0 || n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5))


function factorial(n) {
    let results = [];

    function calculateFactorial(x) {
        if (x == 0 || x == 1) return 1;
        let result = x * calculateFactorial(x - 1);
        results.push(result);
        return result;
    }

    calculateFactorial(n);  // Call the recursive function

    return results;
}

console.log(factorial(5));

