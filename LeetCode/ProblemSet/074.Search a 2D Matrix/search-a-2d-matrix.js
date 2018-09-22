/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let search = function (list, item) {
        let low = 0;
        let high = list.length - 1;

        let index = false;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let guess = list[mid];

            if (guess === item) {
                index = true;
                break;
            } else if (guess > item) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return index;
    };

    let list = [].concat.apply([],matrix);
    return search(list, target);
};

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 3));