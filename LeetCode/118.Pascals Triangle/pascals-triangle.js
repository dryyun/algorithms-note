/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (0 === numRows) {
        return [];
    }
    let result = [
        [1],
        [1, 1],
        [1, 2, 1],
    ];
    if (3 >= numRows) {
        result.length = numRows;
        return result;
    }

    for (let i = 4; i <= numRows; i++) {
        result[i - 1] = [1];
        result[i - 1] [i - 1] = 1;
        for (let j = 1; j < i - 1; j++) {
            result[i - 1] [j] = result[i - 2][j - 1] + result[i - 2][j];
        }
    }
    return result;
};
console.log(generate(0));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
console.log(generate(6));
