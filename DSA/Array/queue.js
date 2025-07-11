class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.items[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        if(!this.isEmpty()) {
            const dequeueValue = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return dequeueValue;
        }
    }

    peek() {
        if(this.isEmpty) {
            return this.items[this.front];
        } else {
            return "Queue is empty";
        }
    }

    isEmpty() {
        return this.front === this.rear;
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        let result = "";
        for(let i = this.front; i < this.rear; i++) {
            result += this.items[i] + (i < this.rear -1 ? ' -> ' : "")
        }
        console.log(result);
    }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print();               // 10 → 20 → 30
console.log(q.dequeue()); // 10
console.log(q.peek());    // 20
console.log(q.size());    // 2
console.log(q.isEmpty()); // false
