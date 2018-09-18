/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let path = [];

    let dfs = function (str, start) {
        if (start === str.length) {
            result.push(path.concat());
            return;
        }
        for (let i = start; i < str.length; i++) {
            if (isPalindrome(str, start, i)) {
                path.push(s.substr(start, i - start + 1));
                dfs(str, i + 1);
                path.pop();
            }
        }

    };
    dfs(s, 0);
    return result;
};

function isPalindrome(str, start, end) {
    while (start < end && str[start] === str[end]) {
        start++;
        end--;
    }
    return start >= end;
}

// console.log(isPalindrome('abba', 0, 3));

console.log(partition('aab'));
