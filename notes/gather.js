/**
 * 判断回文
 * @param str
 * @param start
 * @param end
 * @return {boolean}
 */
function isPalindrome(str, start, end) {
    while (start < end && str[start] === str[end]) {
        start++;
        end--;
    }
    return start >= end;
}