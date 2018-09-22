/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    if (version1 === version2) {
        return 0;
    }
    let va1 = version1.split('.');
    let va2 = version2.split('.');

    let len = Math.max(va1.length, va2.length);
    for (let i = 0; i < len; i++) {
        let n1 = Number(va1[i] ? va1[i] : 0);
        let n2 = Number(va2[i] ? va2[i] : 0);
        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        }
    }

    return 0;
};

console.log(compareVersion('0.1', '1.1'));
console.log(compareVersion('1.0.1', '1'));
console.log(compareVersion('1.0.1', '1.0.1.0'));
console.log(compareVersion('1.0.0', '1'));
console.log(compareVersion('1', '1.0.1'));
console.log(compareVersion('7.5.2.5', '7.5.3'));
