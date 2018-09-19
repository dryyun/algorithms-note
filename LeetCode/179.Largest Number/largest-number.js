/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // console.log(nums[0]);
    nums.sort((a, b) => {
        let as = a.toString();
        let bs = b.toString();
        console.log(typeof as[0], bs[0]);
        return as[0] - bs[0];
    });
    console.log(nums);
//
};
console.log(largestNumber([10, 2])); // 210
// console.log(largestNumber([3, 30, 34, 5, 9])); // 9534330 , 32，30，3
