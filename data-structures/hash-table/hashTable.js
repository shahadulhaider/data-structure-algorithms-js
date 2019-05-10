function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') return key;
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
  }

  hasKey(key) {
    return this.table[this.hashCode(key)] != null;
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair ? valuePair.value : undefined;
  }

  remove(key) {
    const valuePair = this.table[this.hashCode(key)];
    if (valuePair != null) {
      delete this.table[this.hashCode(key)];
      return true;
    }
    return false;
  }

  getTable() {
    return this.table;
  }

  keyValues() {
    const valuePairs = [];
    for (let k in this.table) {
      valuePairs.push(this.table[k]);
    }
    return valuePairs;
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  forEach(callback) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[i].key, valuePairs[i].value);
      if (result === false) break;
    }
  }

  size() {
    return this.keyValues().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    return this.keyValues().toString();
  }

}

module.exports = HashTable;