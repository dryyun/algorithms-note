/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();

    let max = 0, tmpLen = 0, ignore = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        if (!map.has(s[i]) || map.get(s[i]) < ignore) {
            map.set(s[i], i);
            tmpLen++;
            max = Math.max(max, tmpLen);
        } else {
            tmpLen = i - map.get(s[i]);
            ignore = map.get(s[i]);// 这个前面的忽略
            map.set(s[i], i);
        }
    }
    return max;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring("tmmzuxt"));
