/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let s = x.toString();
    for (let i = 0, len = s.length; i < Math.ceil(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(11));
console.log(isPalindrome(12121));
console.log(isPalindrome(123321));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
