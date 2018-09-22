/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let len = gas.length;
    let can = function (start) {
        let left = gas[start];
        let steps = len - 1;
        while (steps--) {
            let next = start + 1 === len ? 0 : start + 1;
            left -= cost[start];
            if (left < 0) {
                return false;
            }
            left += gas[next];
            start = start + 1 === len ? 0 : start + 1;
        }
        return left >= cost[start];
    };

    for (let i = 0; i < len; i++) {

        if (gas[i] >= cost[i] && can(i, gas, cost)) {
            return i;
        }
    }
    return -1;
};

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([2, 3, 4,], [3, 4, 3]));
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
console.log(canCompleteCircuit([2], [2]));