/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let ba = n.toString(2).split('');
    let num = 0;
    ba.forEach(v => {
        if (v === '1') {
            num++;
        }
    });
    return num;
};

console.log(hammingWeight(11));
console.log(hammingWeight(128));