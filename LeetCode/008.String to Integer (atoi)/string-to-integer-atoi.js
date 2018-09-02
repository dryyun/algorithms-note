/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();

    let pattern = /^(\-|\+)?[0-9]+/;
    let tmp = pattern.exec(str);

    if (tmp) {
        var num = Number(tmp[0]);
        if (num < -2147483648)
            return -2147483648;
        if (num > 2147483647)
            return 2147483647;
        return num;
    }
    return 0;
};

console.log(myAtoi('42'));
console.log(myAtoi('    -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
