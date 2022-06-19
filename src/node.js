class Node {
    constructor(value, next, end = false){
        this.value = value;
        this.next  = next;
        this.end   = end;
    };
}

module.exports = Node;