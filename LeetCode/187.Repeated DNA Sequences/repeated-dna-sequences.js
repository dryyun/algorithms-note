/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let result = [];
    let map = {};
    for (let i = 0, len = s.length; i < len; i++) {
        if (i + 10 <= len) {
            let str = s.substr(i, 10);
            if (!map[str]) {
                map[str] = 1;
            } else {
                let times = map[str];
                if (times === 1) {
                    map[str] = times + 1;
                    result.push(str);
                }
            }
        }
    }
    return result;
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"));


