class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.count++;

    return this;
  }

  // Remove item from the end of the list
  pop() {
    if (!this.head) return undefined;

    let removed = this.tail;

    if (this.count === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = removed.prev;
      this.tail.next = undefined;
      removed.prev = undefined;
    }

    this.count--;

    return removed;
  }

  // Remove item from the beginning of the list
  shift() {
    if (!this.head) return undefined;

    let removed = this.head;

    if (this.count === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = removed.next;
      this.head.prev = undefined;
      removed.next = undefined;
    }

    this.count--;

    return removed;
  }

  // Add item from the beginning of the list
  unshift(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
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
      counter++;
      current = current.next;
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
    let index = 0;

    while (current) {
      if (element === current.element) return index;
      index++;
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
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = node, node.prev = prevNode;
    node.next = nextNode, nextNode.prev = node;

    this.count++;

    return true;
  }

  // Remove an item at index from the list
  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined;
    if (index === this.count - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;

    removed.prev = undefined;
    removed.next = undefined;

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
  // Reverse list
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

module.exports = DoublyLinkedList;