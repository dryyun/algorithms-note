/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let len = s.length;
    if (0 === len || 1 === len) {
        return 0
    }

    let arr = [];
    let stack = [];
    for (let i = 0; i < len; i++) {
        let item = s[i];
        if (item === '(') {
            stack.push(i);
        } else {
            let p = stack.pop();
            if (s[p] === '(') {
                arr.push([p, i]);
            }
        }
    }

    len = arr.length;
    if (0 === len) {
        return 0;
    }
    if (1 === len) {
        return arr[0][1] - arr[0][0] + 1;
    }


    arr.sort((a, b) => a[0] - b[0]);

    let relong = false;
    let long = arr[0][1] - arr[0][0] + 1;
    let [lstart, lend] = [arr[0][0], arr[0][1]];
    for (let i = 1; i < len; i++) {
        if (arr[i][0] - lend === 1) {
            lend = arr[i][1];
            if (relong) {
                long = Math.max(long, lend - lstart + 1);
            } else {
                long += arr[i][1] - arr[i][0] + 1;
            }
        } else if (arr[i][0] - lend > 1) {
            long = Math.max(long, arr[i][1] - arr[i][0] + 1);
            relong = true;
            [lstart, lend] = [arr[i][0], arr[i][1]];
        }
    }
    return long;
};

console.log(longestValidParentheses(')(')); // 0
console.log(longestValidParentheses('()(')); // 2
console.log(longestValidParentheses('()(()')); // 2
console.log(longestValidParentheses('(()')); // ()
console.log(longestValidParentheses(')()())')); // ()()
console.log(longestValidParentheses(')()(()())')); // ()(()())
console.log(longestValidParentheses(')())(())')); // (())
console.log(longestValidParentheses(")()())()()(")); // 4