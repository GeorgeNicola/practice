class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);

        if(this.length === 0) this.first = newNode;
        else this.last.next = newNode;

        this.last = newNode;
        this.length++
        return newNode
    }

    dequeue() {
        let first = this.first;

        if(this.length === 0) return null;
        if(this.length === 1) this.last = null;

        this.first = this.first.next;
        this.length--
        return first
    }

    getAt(index) {
        let current = this.first;
        let counter = 0;

        while(current != null) {
            if(index === counter) return current
            counter++
            current = current.next;
        }
        
        return null
    }

    lookup(value) {
        let current = this.first;
        let counter = 0;

        while(current != null) {
            if(value === current.value) return counter;
            counter++
            current = current.next;
        }
        
        return null
    }

    isEmpty() {
        return this.length === 0 ? true : false
    }
}

let newQueue = new Queue()
newQueue.enqueue("Node 1");
newQueue.enqueue("Node 2");
newQueue.enqueue("Node 3");
newQueue.dequeue();
// console.log(newQueue.getAt(1))
console.log("Node 3 index: ", newQueue.lookup("Node 3"))
console.log(newQueue)