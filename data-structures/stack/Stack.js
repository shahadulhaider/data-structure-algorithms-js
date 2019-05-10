const Stack = (() => {
  const items = new WeakMap();

  return class Stack {
    constructor() {
      items.set(this, []);
    }

    push(element) {
      const stack = items.get(this);
      stack.push(element);
    }

    pop() {
      const stack = items.get(this);
      return stack.pop();
    }

    peek() {
      const stack = items.get(this);
      return stack[stack.length - 1];
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

module.exports = Stack;