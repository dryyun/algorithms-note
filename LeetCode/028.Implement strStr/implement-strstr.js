/**
 * TODO 优化
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let nlen = needle.length;
    if (!nlen) {
        return 0;
    }
    let hlen = haystack.length;
    if (nlen > hlen) {
        return -1;
    }

    let r = -1;
    let j = 0;
    for (let i = 0; i < hlen && j < nlen; i++) {
        if (haystack[i] === needle[j]) {
            r === -1 ? r = i : null;
            j++;
        } else {
            i = i - j;
            r = -1;
            j = 0;
        }
    }

    return j === nlen ? r : -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr("mississippi", "issip"));
console.log(strStr("mississippi", "issi"));
console.log(strStr("mississippi", "issipi"));


