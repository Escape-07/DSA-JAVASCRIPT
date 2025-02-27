// var arr = [1, [2, [3, [10, [4, 5]]]]];

// var flatArr = arr.flat(Infinity)
// console.log(flatArr)
function flattenArray(arr) {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

var arr = [1, [2, [3, [10, [4, 5]]]]];
var flatArr = flattenArray(arr);
console.log(flatArr); 
