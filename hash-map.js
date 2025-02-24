import { LinkedList } from "./linked-lists.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;
    let index;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      index = hashCode % this.capacity;
    }

    return index;
  }

  checkThreshold() {
    const threshhold = this.capacity * this.loadFactor;
    const length = this.length();

    if (length > threshhold) {
      return true;
    }

    return false;
  }

  rehash() {
    this.capacity = this.capacity + this.capacity;
    const entries = this.entries();

    this.clear();

    entries.map((entry) => {
      const [key, value] = entry;
      this.set(key, value);
    });
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      //create a new linked list at this index
      //make it a linked list
      this.buckets[index] = new LinkedList();
    }

    this.buckets[index].put(key, value);
  }

  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return null;

    const result = this.buckets[index].fetch(key);

    return result;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return false;

    const result = this.buckets[index].exists(key);

    return result;
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return false;

    const result = this.buckets[index].removeNode(key);

    return result;
  }

  length() {
    if (!this.buckets.length) return 0;

    return this.buckets.reduce((count, list) => count + list.size(), 0);
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    return this.buckets.map((bucket) => bucket.getKeys()).flat();
  }

  values() {
    return this.buckets.map((bucket) => bucket.getValues()).flat();
  }

  entries() {
    const keys = this.keys();
    const values = this.values();

    return keys.map((key, index) => [key, values[index]]);
  }
}
