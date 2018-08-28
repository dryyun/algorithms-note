/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let slen = strs.length;
    if (0 === slen) {
        return '';
    }
    if (1 === slen) {
        return strs[0];
    }

    return lcp(strs, 0, slen - 1);
};

/**
 *
 * @param strs
 * @param left
 * @param right
 */
var lcp = function (strs, left, right) {
    if (left === right) {
        return strs[left];
    }
    let mid = Math.floor((left + right) / 2);
    let lstr = lcp(strs, left, mid);
    let rstr = lcp(strs, mid + 1, right);

    return (function compare(lstr, rstr) {
        let lcp = '';
        let len = Math.min(lstr.length, rstr.length);
        for (let i = 0; i < len; i++) {
            if (lstr[i] !== rstr[i]) {
                return lcp;
            }
            lcp += lstr[i];
        }
        return lcp;
    })(lstr, rstr);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

