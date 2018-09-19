/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = [];
    dp[0] = true;

    let len = s.length;
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substr(j, i - j)) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return !!dp[len];
};


console.log(wordBreak('leetcode', ["leet", "code"]));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
    , ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));
