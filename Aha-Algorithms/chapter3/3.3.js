/**
 * 火柴棍等式 i + j = x ;
 */
"use strict";

var matchMap = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
let m = 18,
    max = 1111,
    sum = 0,
    startTime = new Date().getTime();

let calMatchesByNum = function (num) {
    let sum = 0;

    while (num.toString().length > 1) {
        sum += matchMap[num % 10];
        num = Math.floor(num / 10);
    }
    sum += matchMap[num];
    return sum;
};

for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
        let x = i + j;

        if ((calMatchesByNum(i) + calMatchesByNum(j) + calMatchesByNum(x)) === m - 4) {
            console.log(i, j, x);
            sum++;
        }
    }
}
console.log('sum', sum);


let endTime = new Date().getTime();
console.log('use', endTime - startTime, 'ms');