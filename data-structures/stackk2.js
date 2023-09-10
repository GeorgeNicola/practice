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

    push(value) {
        let newNode = new Node(value);

        if(this.length === 0) this.bottom = newNode

        newNode.next = this.top;
        this.top = newNode;

        this.length++
        return newNode
    }

    pop() {
        let topNode = this.top;

        if(this.length === 0) return null
        if(this.length === 1) this.bottom = null

        this.top = this.top.next;

        this.length--
        return topNode;
    }

    getAt(index) {
        let current = this.top;
        let counter = 0;

        while(current) {
            if(counter === index) return current;
            counter++
            current = current.next
        }

        return null
    }

    lookup(value) {
        let current = this.top;
        let counter = 0;

        while(current) {
            if(value === current.value) return counter;
            counter++
            current = current.next
        }

        return null
    }

    isEmpty() {
        return this.length === 0 ? true : false
    }
}

let newStack = new Stack()
newStack.push("Node 1")
newStack.push("Node 2")
newStack.push("Node 3")
newStack.push("Node 4")
newStack.pop();
console.log(newStack.getAt(1))
console.log(newStack.lookup("Node 2"))
console.log(newStack)