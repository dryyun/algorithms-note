/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    if (len <= 1) {
        return s;
    }

    let start = 0, sl = 1;

    let dp = [];
    dp[0] = [];
    dp[0][0] = true;
    for (let i = 1; i < len; i++) {
        dp[i] = [];
        dp[i][i] = true;
        if (s[i - 1] === s[i]) {
            start = i - 1;
            sl = 2;
            dp[i - 1][i] = true;
        }
    }

    for (let k = 3; k <= len; k++) {
        for (let i = 0; i <= len - k; i++) {
            if (s[i] === s[i + k - 1] && dp[i + 1][i + k - 2]) {
                dp[i][i + k - 1] = true;
                start = i;
                sl = k;
            }
        }
    }
    return s.substr(start, sl);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abc'));
console.log(longestPalindrome('aaaa'));
