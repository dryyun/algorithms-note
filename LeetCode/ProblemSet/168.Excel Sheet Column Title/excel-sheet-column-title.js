/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let arr = [];
    while (n > 26) {
        let m = n % 26;
        if (m) {
            arr.unshift(String.fromCharCode(m + 64));
            n = Math.floor(n / 26);
        } else {
            arr.unshift(String.fromCharCode(26 + 64));
            n = Math.floor(n / 26) - 1;
        }
    }
    arr.unshift(String.fromCharCode(n + 64));
    return arr.join('');
};

console.log(convertToTitle(1));
console.log(convertToTitle(52));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(703));
