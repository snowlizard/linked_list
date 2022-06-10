const Node = require('./node');

/**
 * Linked List should support insert and remove operations.
 * It should also support the ability to query length and 
 * retreive values at specific indicies in the list. 
 */
class LinkedList {
    
    constructor() {
        this.tail = new Node(null, null, -2);
        this.head = new Node(null, this.tail, -1);
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
            let prevNode = this.getNode(i-1);
            let currentNode = this.getNode(i);
            if(currentNode){
                let newNode = new Node(str, currentNode, i);
                prevNode.setNext(newNode);
            } else {
                let newNode = new Node(str, this.tail, i);
                prevNode.setNext(newNode);
            }
            this.resetIndexes();
            console.log(this.head, '--------');
            return prevNode.getNext().getValue();
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
            prevNode.setNext(deleteNode.getNext())
        } else {
            return false;
        }
    }

    /**
     * Return the length of the list
     */
    length() {
        let node = this.head.getNext();
        let counter = 0;
        while(node.getNext()){
            counter++;
            node = node.getNext();
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
        if (i < -2 || i > this.length()) return null;
        let node = this.head
        while(node.getNext() && node.getIndex() !== i){
            node = node.getNext();
        }
        return node ? node : null;
    }

    resetIndexes(){
        let node = this.head.getNext();
        let counter = 0;
        while(node !== null && node.getIndex() !== -2){
            node.setIndex(counter);
            counter++;
            node = node.getNext();
        }
        
    }
}

module.exports = LinkedList;