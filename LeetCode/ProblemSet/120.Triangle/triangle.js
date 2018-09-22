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

    let x = 0;
    while (x < len) {
        for (let y = 0, len = triangle[x].length; y < len; y++) {
            let num = triangle[x][y];
            if (triangle[x + 1] === undefined) {
                continue;
            }
            if (x >= 1 && y >= 1) {
                triangle[x + 1][y] = Math.min(triangle[x + 1][y], triangle[x + 1][y] - triangle[x][y - 1] + num)
            } else {
                triangle[x + 1][y] += num;
            }
            triangle[x + 1][y + 1] += num;
        }
        x++;
    }
    return Math.min(...triangle[len - 1]);
};

// console.log(minimumTotal([[3]]));
console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]));

