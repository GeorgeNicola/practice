class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    push(value) {
        let newNode = new Node(value);

        if(this.length === 0) this.bottom = newNode
        else newNode.next = this.top;
    
        this.top = newNode
        this.length++

        return newNode;
    }

    pop() {
        let top = this.top;
        this.top = this.top.next

        if(this.length === 0) return null
        if(this.length === 1) this.bottom = null;
        
        this.length--
        return top
    }

    isEmpty(){
        return this.length === 0 ? true : false
    }
}

const myStack = new Stack();
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("google")
myStack.pop()
console.log(myStack)