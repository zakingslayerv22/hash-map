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

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      //create a new linked list at this index
      //make it a linked list
      this.buckets[index] = new LinkedList();
    }

    this.buckets[index].put(key, value);
  }
}
