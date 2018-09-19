/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    tokens.forEach(v => {
        switch (v) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                 f = stack.pop();
                 s = stack.pop();
                stack.push(s - f);
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                 f = stack.pop();
                 s = stack.pop();
                stack.push(parseInt(s / f));
                break;
            default:
                stack.push(Number(v));
                break;
        }
    });
    return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
