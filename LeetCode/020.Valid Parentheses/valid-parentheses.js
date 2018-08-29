/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let match = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];

    let isvalid = true;
    for (let i = 0, len = s.length; i < len; i++) {
        if (match[s[i]]) { // 左括号
            stack.push(s[i]);
        } else if (match[stack.pop()] !== s[i]) { // 右括号
            isvalid = false;
            break;
        }
    }
    return isvalid ? stack.length === 0 : false;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
