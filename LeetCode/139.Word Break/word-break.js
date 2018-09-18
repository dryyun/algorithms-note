/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // let wordMap = {};
    // wordDict.forEach(w => {
    //     wordMap[w] = 1;
    // });

    let dp = [];
    dp[0] = true;

    let len = s.length;
    for (let i = 0; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substr(j, i - j))!==-1) {
                console.log(s.substr(j, i - j));
                // console.log('asd');
                // let t = s.substr(j, i - j);
                // console.log(t);
                // if (wordMap[t]) {
                    dp[i] = true;
                    break;
                // }

            }
        }
    }
    // console.log(dp, dp[len]);

    return dp[len] ? true : false;

};


console.log(wordBreak('leetcode', ["leet", "code"]));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
    , ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));
