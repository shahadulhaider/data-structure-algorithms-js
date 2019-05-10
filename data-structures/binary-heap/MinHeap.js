function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.shift();

    const removed = this.heap.shift();
    this.siftDown(0);
    return removed;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();

    if (left < size && this.heap[element] > this.heap[left]) {
      element = left;
    }
    if (right < size && this.heap[element] > this.heap[right]) {
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
}

module.exports = MinHeap;

// Usage
const heap = new MinHeap();

// heap.insert(10);
// heap.insert(2);
// heap.insert(4);
// heap.insert(7);
// heap.insert(8);
// heap.insert(5);
// heap.insert(12);
// heap.insert(15);

// console.log(heap);
// console.log(heap.peek());
// console.log(heap.size());
// console.log(heap.isEmpty());
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}
console.log(heap);
console.log('Extract minimum: ', heap.extract());
console.log(heap);
