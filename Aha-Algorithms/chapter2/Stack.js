class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(value) {
        this.data[this.top] = value;
        this.top++;
    }

    pop() {
        if (!this.isEmpty()) {
            let val = this.data[this.top - 1];
            delete this.data[this.top - 1];
            this.top--;
            return val;
            // return this.data[--this.top];
        }
        throw new Error('stack is empty');
    }

    first() {
        if (!this.isEmpty()) {
            return this.data[this.top - 1];
        }
        throw new Error('stack is empty');
    }

    isEmpty() {
        return this.top === 0;
    }
}

module.exports = Stack;
