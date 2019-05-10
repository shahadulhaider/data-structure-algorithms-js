class Node {
  constructor(element) {
    this.element = element,
    this.next = undefined;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }

  // Add item at the end of the list
  push(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.count++;

    return this;
  }

  // Remove item from the end of the list
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = undefined;
    this.count--;

    if (this.count === 0) {
      this.head = undefined,
      this.tail = undefined;
    }

    return current;
  }


  // Remove item from the beginning of the list
  shift() {
    if (!this.head) return undefined;

    const tmp = this.head;
    this.head = this.head.next;

    this.count--;
    if (this.count === 0) {
      this.tail = undefined;
    }
    return tmp;
  }

  // Add item from the beginning of the list
  unshift(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.count++;

    return this;
  }

  // Get an item from index
  get(index) {
    if (index < 0 || index >= this.count) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // Set an item at index
  set(index, element) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.element = element;
      return true;
    }
    return false;
  }

  // Search an item in the list
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current != null; i++) {
      if (element === current.element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // Insert item at index
  insert(index, element) {
    if (index < 0 || index > this.count) return false;
    if (index === this.count) return !!this.push(element);
    if (index === 0) return !!this.unshift(element);

    const node = new Node(element);
    const prev = this.get(index - 1);
    const tmp = prev.next;

    prev.next = node;
    node.next = tmp;

    this.count++;

    return true;
  }


  // Remove an item at index from the list
  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined;
    if (index === this.count - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.count--;

    return removed;
  }

  // Remove an item from the list
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // count of the list
  size() {
    return this.count;
  }

  // Check if the list is empty
  isEmpty() {
    return this.count === 0;
  }

  // Clear the list
  clear() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }

  // Retrieve head
  getHead() {
    return this.head;
  }

  // Reverse list
  reverse() {
    let current = this.head;

    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = undefined;

    for (let i = 0; i < this.count; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  // Print list
  toString() {
    let current = this.head;
    let listArr = [];

    while (current) {
      listArr.push(current.element);
      current = current.next;
    }

    return listArr.toString();
  }
}

module.exports = SinglyLinkedList;