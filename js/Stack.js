class Stack {
    constructor(size) {
        this.arr = new Array(size);
        this.capacity = size;
        this.top = -1;
    }

    push(x) {
        if (this.isFull()) {
            console.log("OverFlow");
        }
        console.log("Inserting");
        this.arr[++this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Empty");
        }
        return this.arr[this.top--];
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    printStack() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.arr[i]);
        }
    }
}


// let s1 = new Stack(10);
// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.push(4);

// s1.pop();
// console.log("After Pop");
// s1.printStack();

export default Stack;