/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    if (len <= 1) {
        return s;
    }

    let dp = []
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }

    let st = 0, sl = 0
    for (let i = len - 2; i >= 0; i--) {
        dp[i][i] = true
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                if (j - i > sl) {
                    st = i
                    sl = j - i
                }
            }
        }
    }
    return s.substring(st, st + sl + 1)
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abc'));
console.log(longestPalindrome('aaaa'));
