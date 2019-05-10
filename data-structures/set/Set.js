class Set {
  constructor() {
    this.items = {};
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  values() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    return this.values().toString();
  }
}

module.exports = Set;