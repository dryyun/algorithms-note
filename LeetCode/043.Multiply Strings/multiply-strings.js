/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    let len1 = num1.length;
    let len2 = num2.length;

    let arr = new Array(len1 + len2).fill(0);
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            arr[i + j + 1] += Number(num1[i]) * Number(num2[j]);
        }
    }

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i - 1] += Math.floor(arr[i] / 10);
        arr[i] = arr[i] % 10;
    }

    if (arr[0] === 0) {
        arr.shift();
    }
    return arr.join('');

};

console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
