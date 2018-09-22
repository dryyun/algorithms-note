/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = [];
    let map = {};

    strs.forEach(v => {
        let str = v.split('').sort().join('');
        if (map[str] === undefined) {
            map[str] = result.length;
            result.push([v]);
        } else {
            result[map[str]].push(v);
        }
    });
    return result
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));