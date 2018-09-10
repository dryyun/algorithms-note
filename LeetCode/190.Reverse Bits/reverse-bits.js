/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let s = '00000000000000000000000000000000';
    let b = n.toString(2);
    let bl = b.length;
    if (bl < 32) {
        s = s.slice(0, 32 - bl) + b;
    } else {
        s = b;
    }
    s = s.split('').reverse().join('');
    return parseInt(s, 2);
};

console.log(reverseBits(43261596));
console.log(reverseBits(2147483648));
