/**
 * 炸弹人
 */
"use strict";

let map = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
    ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
    ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '#', '#'],
    ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
    ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

// 输出 map
for (let i = 0; i < map.length; i++) {
    let row = '';
    for (let j = 0; j < map[i].length; j++) {
        row += map[i][j];
    }
    console.log(row)
}

let max = {
    x: 0,
    y: 0,
    sum: 0
};

// 统计
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === '.') {
            let sum = 0;

            // 向上统计
            let [x, y] = [i, j];
            while (map[x][y] !== '#') {
                if (map[x][y] === 'G') {
                    sum++;
                }
                x--;
            }

            // 向下统计
            [x, y] = [i, j];
            while (map[x][y] !== '#') {
                if (map[x][y] === 'G') {
                    sum++;
                }
                x++;
            }

            // 向左统计
            [x, y] = [i, j];
            while (map[x][y] !== '#') {
                if (map[x][y] === 'G') {
                    sum++;
                }
                y--;
            }

            // 向右统计
            [x, y] = [i, j];
            while (map[x][y] !== '#') {
                if (map[x][y] === 'G') {
                    sum++;
                }
                y++;
            }

            if (sum > max.sum) {
                max = {
                    x: i,
                    y: j,
                    sum: sum
                }
            }
        }
    }
}

console.log(max)


