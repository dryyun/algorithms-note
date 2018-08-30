/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let s = '1';
    for (let i = 1; i < n; i++) {
        s = cas(s);
    }
    return s;
};

var cas = function (s) {
    let r = '';
    let tmp = s[0];
    let sum = 1;
    for (let i = 1, len = s.length; i < len; i++) {
        if (s[i] === tmp) {
            sum++;
        } else {
            r += `${sum}${tmp}`;
            sum = 1;
            tmp = s[i];
        }
    }
    r += `${sum}${tmp}`;
    return r;
};


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(v => {
    console.log(v, countAndSay(v));
});

