/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    newNode.next= this.head;
    this.head = newNode;
    if(!this.tail) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) throw new Error("Cannot be empty list");

    const temp = this.head.val;

    if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      temp = this.head;
      while(temp.next != this.tail){
        temp = temp.next;
      }
      temp = temp.next.val;
      temp.next = null;
      this.tail = temp;
    }
    this.length -= 1;
    return temp;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) throw new Error("Cannot be empty list");
    const temp = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return temp;
  }

  getNodeAt(idx) {
    if(!this.head || idx < 0 || idx >= this.length) throw new Error("Invalid Index");
    const temp = this.head;
    for(let i = 0; i<idx; i++){
      temp = temp.next;
    }
    return temp;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const temp = this.getNodeAt(idx);
    return temp.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const temp = this.getNodeAt(idx);
    temp.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const temp = this.getNodeAt(idx-1);
    const newNode = new Node(val);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    const temp = this.getNodeAt(idx-1);
    const remove = temp.next;
    temp.next = remove.next;
    this.length -= 1;
    return remove.val;
  }

  /** average(): return an average of all values in the list */
  average() {
    let total = 0;
    const temp = this.head;
    for(let i = 0; i < this.length; i++){
      total += temp.val;
      temp = temp.next;
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
