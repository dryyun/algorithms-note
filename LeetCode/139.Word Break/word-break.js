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

    let dfs = function (start) {
        if (start === len) {
            console.log('finish');
            return;
        }
        for (let i = start + 1; i < len; i++) {
            let w = s.substr(start, i);
            // console.log(w);
            if (wordMap[w]) {
                console.log(w);
                dfs(i + 1);
            }
        }
    };

    dfs(0);

};


console.log(wordBreak('leetcode', ["leet", "code"]));
// console.log(wordBreak('applepenapple', ['apple', 'pen']));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
