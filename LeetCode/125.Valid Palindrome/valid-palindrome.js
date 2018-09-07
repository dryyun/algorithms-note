/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.trim().toLowerCase();
    let len = s.length;
    if (0 === len) {
        return true;
    }

    let l = 0;
    let r = len - 1;
    while (l <= r) {
        while (!isNumOrLetter(s.charCodeAt(l)) && l <= r) {
            l++;
        }
        while (!isNumOrLetter(s.charCodeAt(r)) && l <= r) {
            r--;
        }
        if (l > r) {
            return true;
        }
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};

function isNumOrLetter(code) {
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

console.log(isPalindrome('  '));
console.log(isPalindrome('..'));
console.log(isPalindrome('0P')); // 0->48,P->80 ，相差就是 32 。
console.log(isPalindrome('abcba'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));