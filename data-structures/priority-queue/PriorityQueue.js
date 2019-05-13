class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(value, priority) {
//     if (value != null || priority != null) {
//       let newNode = new Node(value, priority);
//       this.items.push(newNode);
//       this.siftUp(this.items.length - 1);
//       return true;
//     }
//     return false;
//   }

//   siftUp(index) {

//     let element = this.items[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       let parent = this.items[parentIndex];

//       if (element.priority < parent.priority) break;
//       [parent, element] = [element, parent];
//       index = parentIndex;
//     }

//   }
// }

// module.exports = PriorityQueue;

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(this.values.length - 1);
  }
  bubbleUp(idx) {
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// class Node {
//   constructor(val, priority) {
//     this.val = val;
//     this.priority = priority;
//   }
// }

const q = new PriorityQueue();

q.enqueue('hazard', 0);
q.enqueue('messi', 1);
q.enqueue('sterling', 2);
q.enqueue('suarez', 1);
q.enqueue('salah', 3);
q.enqueue('dybala', 4);
console.log(q);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
q.enqueue('trent', 1);
console.log(q);