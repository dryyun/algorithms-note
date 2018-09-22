/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let len = triangle.length;
    if (0 === len) {
        return 0;
    }
    if (1 === len) {
        return triangle[0][0];
    }

    let min = Number.MAX_SAFE_INTEGER;
    let dfs = function (step, sum, preindex, triangle) {
        if (step === len) {
            min = Math.min(min, sum);
            return;
        }
        dfs(step + 1, sum + triangle[step][preindex], preindex, triangle);
        dfs(step + 1, sum + triangle[step][preindex + 1], preindex + 1, triangle);
    };
    dfs(1, triangle[0][0], 0, triangle);
    return min;
};

console.log(minimumTotal([[3]]));
console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]));

