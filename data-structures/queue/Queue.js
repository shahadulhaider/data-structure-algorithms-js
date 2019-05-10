const Queue = (() => {
  const items = new WeakMap();

  return class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      const queue = items.get(this);
      queue.push(element);
    }

    dequeue() {
      const queue = items.get(this);
      return queue.shift();
    }

    peek() {
      const queue = items.get(this);
      return queue[queue.length - 1];
    }

    front() {
      const queue = items.get(this);
      return queue[0];
    }

    clear() {
      items.set(this, []);
    }

    size() {
      return items.get(this).length;
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    toString() {
      return items.get(this).toString();
    }
  };
})();

module.exports = Queue;