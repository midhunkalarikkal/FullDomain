class Stack {
    constructor() {
        this.items = [];
        this.top = 0;
        this.minStack = [];
    }

    push(value) {
        this.items[this.top] = value;
        this.top++;
        if(this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
            this.minStack[this.minStack.length] = value;
        }
    }

    pop() {
        if(this.top === 0) {
            return "Stack is empty";
        }

        this.top--;
        const poppedValue = this.items[this.top];
        delete this.items[this.top];
        if(poppedValue < this.minStack[this.minStack.length - 1]) {
            delete this.minStack[this.minStack.length - 1];
        }
        return poppedValue;
    }
    

    findMin() {
        if(this.minStack.length === 0) return "Stack is emptyt"
        return this.minStack[this.minStack.length - 1];
    }

    findSize() {
        return this.top;
    }

    isEmpty() {
        return this.top === 0
    }

    print() {
        let result = '';
        for (let i = 0; i < this.top; i++) {
            result += this.items[i] + (i < this.top - 1 ? ' ← ' : '');
        }
        console.log(result);
    }
}

const stack = new Stack();

console.log("Is empty?", stack.isEmpty());  // true

stack.push(10);
stack.push(20);
stack.push(5);
stack.push(30);

console.log("Stack after pushes:");
stack.print(); // 10 ← 20 ← 5 ← 30

console.log("Min:", stack.findMin()); // 5
console.log("Size:", stack.findSize()); // 4

console.log("Pop:", stack.pop());     // 30
console.log("Min after pop:", stack.findMin()); // 5

console.log("Pop:", stack.pop());     // 5
console.log("Min after pop:", stack.findMin()); // 10

console.log("Is empty?", stack.isEmpty());  // false
console.log("Size:", stack.findSize());     // 2

stack.print(); // 10 ← 20
