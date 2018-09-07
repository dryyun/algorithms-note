/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ];
    if (4 >= rowIndex) {
        return arr[rowIndex];
    }

    let recursion = function (row) {
        if (row === 4) {
            return arr[row];
        }
        let last = recursion(row - 1);
        let a = [1];
        a[row] = 1;
        for (let i = 1; i < row; i++) {
            a[i] = last[i - 1] + last[i];
        }
        return a;
    };
    return recursion(rowIndex);
};

console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
