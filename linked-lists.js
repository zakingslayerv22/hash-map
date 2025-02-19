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
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
