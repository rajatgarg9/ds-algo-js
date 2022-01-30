class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  printAll() {
    let outputString = "";
    let selectedNode = this.head;

    while (selectedNode) {
      outputString = `${outputString}${selectedNode.element},`;
      selectedNode = selectedNode.next;
    }

    return outputString;
  }

  enqueue(element) {
    const newNode = new Node(element);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    const selectedNode = this.head;

    this.head = this.head.next;
    --this.size;
    return selectedNode.element;
  }
}

module.exports = Queue;

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

// consol.log(queue);
