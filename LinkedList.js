class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Add new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.headNode == null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // Add new node to the start of the list
  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  // Get total number of nodes in the list
  size() {
    let current = this.headNode;

    if (this.headNode == null) {
      return 0;
    }

    let count = 1;

    while (current.nextNode != null) {
      current = current.nextNode;
      count++;
    }

    return count;
  }

  // get head's value
  head() {
    if (this.headNode == null) {
      return undefined;
    }

    return this.headNode.value;
  }

  // get tail's value
  tail() {
    if (this.headNode == null) {
      return undefined;
    }

    let current = this.headNode;

    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current.value;
  }

  // get node's value at a given index
  at(index) {
    let current = this.headNode;
    let count = 0;

    while (current != null) {
      if (count == index) {
        return current.value;
      }
      current = current.nextNode;
      count++;
    }

    return undefined;
  }

  // remove head node from the list and return its value
  pop() {
    if (this.headNode == null) return undefined;

    let oldHead = this.headNode;

    this.headNode = this.headNode.nextNode;

    return oldHead.value;
  }

  // check if value is in the list
  contains(value) {
    let current = this.headNode;

    while (current != null) {
      if (current.value == value) return true;
      current = current.nextNode;
    }

    return false;
  }

  // get index of a given value
  findIndex(value) {
    let current = this.headNode;
    let index = 0;

    while (current != null) {
      if (current.value == value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  // print list
  toString() {
    let result = "";

    if (this.headNode == null) return "";
    let current = this.headNode;

    while (current != null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }
}

export { LinkedList };
