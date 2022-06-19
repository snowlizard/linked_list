const Node = require('./node');

/**
 * Linked List should support insert and remove operations.
 * It should also support the ability to query length and 
 * retreive values at specific indicies in the list. 
 */
class LinkedList {
    
    constructor() {
        this.tail = new Node(null, null, true);
        this.head = new Node(null, this.tail, true);
    }

    /**
     * Insert a string value into the list at the given index.
     * If the index is longer than the list then return false.
     * Returns the value inserted on successful insert.
     * 
     * If there is an item at the index, the new item is inserted at the index
     * of requested and other items are shifted right.
     * @param {i} The index to insert at.  If 0, inserts at the beginning 
     * @param {str} A string to insert in the list 
     */
    insert(i, str) {
        if(i >= 0 && i <= this.length()){
            let prevNode;
            let currentNode = this.getNode(i);

            i - 1 > 0 ? prevNode = this.getNode(i-1) :
            prevNode = this.head;

            if(currentNode){
                let newNode = new Node(str, currentNode);
                prevNode.next = newNode;
            } else {
                let newNode = new Node(str, this.tail);
                prevNode.next = newNode;
            }
            
            return prevNode.next.value;
        } else {
            return false;
        }
    }

    /**
     * Remove a value from the list.  If index is < 0 or greater than the length of the list
     * then return false, otherwise return the removed item.
     * @param {i} index of item to remove.  
     */
    remove(i) {
        const prevNode   = this.getNode(i-1);
        const deleteNode = this.getNode(i);
        if(deleteNode){
            prevNode.next = deleteNode.next;
        } else {
            return false;
        }
    }

    /**
     * Return the length of the list
     */
    length(print = false) {
        let node = this.head.next;
        let counter = 0;
        while(!node.end){
            print ? console.log('-'.repeat(counter), node.value) : '';
            counter++;
            node = node.next;
        }
        return counter
    }

    /**
     * 
     * @param {i} index 
     * @returns the node at the index or null if there is not node
     * at that index
     */
    getNode(i) {
        if (i > this.length()) return null;
        let node = this.head;
        let counter = -1;

        while(counter !== i && node.next){
            counter++;
            node = node.next;
        }

        return node.end ? null : node;
    }
}

module.exports = LinkedList;