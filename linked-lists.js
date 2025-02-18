export class LinkedList {
  constructor() {
    this.head = null;
  }

  set(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
