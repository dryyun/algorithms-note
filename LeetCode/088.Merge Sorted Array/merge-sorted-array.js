/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let tmp = nums1.slice(0, m);
    let mi = 0, ni = 0, ti = 0;

    while (mi !== m + n) {
        if (tmp[ti] !== undefined && nums2[ni] !== undefined) {
            if (tmp[ti] <= nums2[ni]) {
                nums1[mi] = tmp[ti];
                mi++;
                ti++;
            } else {
                nums1[mi] = nums2[ni];
                mi++;
                ni++;
            }
        } else if (nums2[ni] !== undefined) {
            nums1[mi] = nums2[ni];
            mi++;
            ni++;
        } else if (tmp[ti] !== undefined) {
            nums1[mi] = tmp[ti];
            ti++;
            mi++;
        }
    }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
m = 6;
nums2 = [1, 2, 2];
n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);


