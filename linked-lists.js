export class LinkedList {
  constructor() {
    this.head = null;
  }

  put(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      if (currentNode.key === key) {
        //overwrite the value
        currentNode.value = value;
        return;
      }

      while (currentNode.nextNode) {
        if (currentNode.key === key) {
          //overwrite the value
          currentNode.value = value;
          return;
        }
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  fetch(key) {
    let currentNode = this.head;

    if (!currentNode) return;

    if (currentNode.key == key) return currentNode.value;

    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;

      currentNode = currentNode.nextNode;
    }
    return null;
  }

  exists(key) {
    let currentNode = this.head;

    if (!currentNode) return;

    if (currentNode.key == key) return true;

    while (currentNode) {
      if (currentNode.key === key) return true;

      currentNode = currentNode.nextNode;
    }
    return false;
  }

  size() {
    let currentNode = this.head;
    let nodeCount = 1;

    if (!currentNode) {
      nodeCount = 0;
      return nodeCount;
    }

    while (currentNode.nextNode) {
      nodeCount += 1;
      currentNode = currentNode.nextNode;
    }
    return nodeCount;
  }

  removeNode(key) {
    let listSize = this.size();
    let currentNode = this.head;
    let previousNode;
    let nextNode;

    if (currentNode.key === key && listSize > 1) {
      nextNode = currentNode.nextNode;
      this.head = nextNode;
      return true;
    }

    if (currentNode.key === key) {
      this.head = null;
      return true;
    }

    while (currentNode) {
      nextNode = currentNode.nextNode;
      if (currentNode.key === key) {
        previousNode.nextNode = nextNode;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  getKeys() {
    let currentNode = this.head;
    let listSize = this.size();
    let keysArray = [];

    while (listSize >= 1) {
      keysArray.push(currentNode.key);
      currentNode = currentNode.nextNode;
      listSize -= 1;
    }

    return keysArray;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
