/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.data = [];
    this.min = undefined;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.data.length) {
        this.min = Math.min(x, this.min);
    } else {
        this.min = x;
    }
    this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.data.length) {
        let pop = this.data.pop();
        if (pop === this.min) {
            if (this.data.length) {
                this.min = Math.min(...this.data);
            } else {
                this.min = undefined;
            }
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let len = this.data.length;
    if (len) {
        return this.data[len - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.data.length) {
        return this.min;
    }
};


let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> 返回 -3.
minStack.pop();
console.log(minStack.top());      //--> 返回 0.
console.log(minStack.getMin());   //--> 返回 -2.