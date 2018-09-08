/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let map = {};
    for (let i = 0, len = numbers.length; i < len; i++) {
        let a = target - numbers[i];

        if (map[a] !== undefined) {
            return [map[a] + 1, i + 1];
        }
        map[numbers[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
