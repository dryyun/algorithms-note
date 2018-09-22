/**
 * @param {number} n
 * @return {string[]}
 */

var result;

function dfs(s, left, right, n) {
    if (s.length === 2 * n) {
        result.push(s);
        return;
    }

    if (left + 1 <= n) {
        dfs(s + '(', left + 1, right, n);
    }

    if (right + 1 <= n && right + 1 <= left) {
        dfs(s + ')', left, right + 1, n);
    }

}

var generateParenthesis = function (n) {
    result = [];
    dfs('', 0, 0, n);
    return result;
};

console.log(generateParenthesis(3));
