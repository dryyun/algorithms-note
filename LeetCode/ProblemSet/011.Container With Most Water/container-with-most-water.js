/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        if (height[l] < height[r]) {
            area = Math.max(area, height[l] * (r - l));
            l++;
        } else {
            area = Math.max(area, height[r] * (r - l));
            r--;
        }
    }
    return area;
};

// 暴力法
// var maxArea = function (height) {
//     let area = 0;
//     let len = height.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             let h = height[i] > height[j] ? height[j] : height[i];
//             let a = (j - i) * h;
//
//             if (a > area) {
//                 area = a;
//             }
//         }
//     }
//     return area;
// };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

