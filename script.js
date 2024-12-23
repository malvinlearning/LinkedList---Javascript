class LinkedList {

    constructor() {
        this.head = null; // Start with an empty list (no head node)
      }

    append(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    getSize() {
        let count = 0;
        if (this.head) {
            count++;
        }
        let current = this.head;
        while(current.nextNode) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    getHead() {
        return `(${this.head.value})`;
    }

    getTail() {
        let current = this.head;
        while (current.nextNode){
            current = current.nextNode;
        }
        return `(${current.value})`;
    }

    getNode(index) {
        let current = this.head;
        let localIndex = 0;

        while (current){
            localIndex++;
            if (localIndex === index){
                return `(${current.value})`;
            }
            
            current = current.nextNode;
        }
        return null;
    }

    pop() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }

        if (!this.head.nextNode) {
            // If there's only one node in the list
            this.head = null; // Remove the only node by setting head to null
            return;
        }

        let current = this.head;
        while(current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        while(current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while(current) {
            index++;
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
        }
        return null;
    }

    insertAt(value, index) {
        const newNode = new Node(value);

        let current = this.head;
        let prev = null;
        let localIndex = 1;
        if (localIndex === index) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }
        while(current) {
            if (localIndex === index) {
                break;
            }
            localIndex++;
            prev = current;
            current = current.nextNode;
        }

        if (current.nextNode != null) {
            prev.nextNode = newNode;
            newNode.nextNode = current;
        } else {
            current.nextNode = newNode;
            newNode.nextNode = null;
        }
    }

    removeAt(index) {
        let current = this.head;
        let prev = this.head;
        let localIndex = 1;

        if (localIndex === index) {
            this.head = this.head.nextNode;
            return;
        }
        while(current) {
            if (localIndex === index) {
                break;
            }
            localIndex++;
            prev = current;
            current = current.nextNode;
        }

        if (current.nextNode != null) {
            prev.nextNode = current.nextNode;
        } else {
            prev.nextNode = null;
        }
    }

    toString() {
        let result = '';
        let currentNode = this.head;
    
        while (currentNode) {
          result += `( ${currentNode.value} ) -> `;
          currentNode = currentNode.nextNode;
        }
    
        result += 'null'; // End of the list
        return result;
    }

    

}

class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.getSize());
console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getNode(2));
list.pop();
console.log(list.toString());
console.log(list.contains('dog'));
console.log(list.find('tiger'));
list.insertAt('tiger', 5);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());