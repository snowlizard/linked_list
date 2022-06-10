class Node {
    constructor(value, next, index){
        this.value = value;
        this.next  = next;
        this.index = index;
    };

    getValue = () => this.value;
    getNext =  () => this.next;
    getIndex = () => this.index;

    setValue = (value) => this.value = value;
    setNext  = (next)  => this.next  = next;
    setIndex = (index) => this.index = index;
}

module.exports = Node;