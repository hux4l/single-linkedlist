class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// linked list class
class LinkedList {
  head = null;
  length = 0;
  nodes = [];

  constructor(head) {
    this.head = head;
    this.head.prev = null;
  }
  addNode(value) {
    let temp = null;
    let p = null;
    temp = new Node(value);
    if (this.head === null) {
      this.head = temp;
    } else {
      p = this.head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = temp;
    }
    return this.head;
  }

  // add node at concrete position
  addNodeAtPosition(node, position) {
    const newNode = new Node(node);
    let temp = this.head;
    let count = 0;
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    while (temp !== null) {
      if (count + 1 === position) {
        temp.next = newNode;
        if (temp.next.next === null) newNode.next = null;
        else newNode.next = temp.next.next;
      }
      count++;
      temp = temp.next;
    }
    return this.head;
  }

  // find Node in Linked List
  findNode(val) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === val) return temp;
      temp = temp.next;
    }
    return null;
  }

  // find node in Linked List at position
  findNodeAtPosition(position) {
    let temp = this.head;
    let count = 0;
    if (position === 0) return this.head;
    while (temp !== null) {
      if (count === position) return temp;
      count++;
      temp = temp.next;
    }
  }

  // find LinkedList position of node
  findNodeIndex(val) {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === val) return count;
      count++;
      temp = temp.next;
    }
    return null;
  }

  // get length of LinkedList
  getLength() {
    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  // delete concrete node
  deleteNode(val) {
    let first = this.head;
    const find = this.findNode(val);
    if (!find) return this.head;
    if (find === first) this.head = this.head.next;
    while (first !== null) {
      if (first.next === find) {
        first.next = first.next.next;
      }
      first = first.next;
    }
    return this.head;
  }

  getNodesArray() {
    let temp = this.head;
    while (temp !== null) {
      this.nodes.push(temp);
      temp = temp.next;
    }
    return this.nodes;
  }
}
