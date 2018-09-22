/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let min = Number.MAX_SAFE_INTEGER;
    let result = 0;

    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        let [s, e] = [i + 1, len - 1];
        while (s < e) {
            let sum = nums[i] + nums[s] + nums[e];

            let abs = Math.abs(target - sum);
            if (min > abs) {
                min = abs;
                result = sum;
            }
            if (sum < target) {
                s++;
            } else if (sum > target) {
                e--;
            } else {
                return sum;
            }
        }
    }
    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 2));
console.log(threeSumClosest([0, 2, 1, -3], 0));
