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

    let lcp = '';
    for (let i = 0, len = strs[0].length; i < len; i++) {
        for (let j = 1; j < slen; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return lcp;
            }
        }
        lcp += strs[0][i];
    }
    return lcp;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
