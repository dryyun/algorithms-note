/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let len = s.length;
    let wordMap = {};
    wordDict.forEach(w => {
        wordMap[w] = 1;
    });

    let isCan = false;
    let dfs = function (start) {
        if (isCan) {
            return;
        }
        if (start === len) {
            isCan = true;
            return;
        }
        for (let i = start; i < len; i++) {
            let w = s.substr(start, i - start + 1);
            if (wordMap[w]) {
                dfs(i + 1);
            }
        }
    };
    dfs(0);
    return isCan;
};


console.log(wordBreak('leetcode', ["leet", "code"]));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
    , ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));
