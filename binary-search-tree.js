const Queue = require("./queue");

class Node {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(element) {
    const newNode = new Node(element);
    if (!this.root) {
      this.root = newNode;

      return this.root;
    }

    let selectedNode = this.root;

    while (selectedNode) {
      if (selectedNode.element === element) {
        return undefined;
      } else if (selectedNode.element > element) {
        if (selectedNode.left) {
          selectedNode = selectedNode.left;
        } else {
          selectedNode.left = newNode;

          return selectedNode;
        }
      } else if (selectedNode.element < element) {
        if (selectedNode.right) {
          selectedNode = selectedNode.right;
        } else {
          selectedNode.right = newNode;

          return selectedNode;
        }
      }
    }
  }

  search(element) {
    let selectedNode = this.root;

    while (selectedNode) {
      if (selectedNode.element === element) {
        return selectedNode;
      } else if (selectedNode.element > element) {
        if (!selectedNode.left) {
          return undefined;
        } else {
          selectedNode = selectedNode.left;
        }
      } else {
        if (!selectedNode.right) {
          return undefined;
        } else {
          selectedNode = selectedNode.right;
        }
      }
    }
    return undefined;
  }

  BFS() {
    const queue = new Queue();
    const data = [];
    queue.enqueue(this.root);

    while (queue.size > 0) {
      const selectedNode = queue.dequeue();

      data.push(selectedNode.element);
      if (selectedNode.left) {
        queue.enqueue(selectedNode.left);
      }
      if (selectedNode.right) {
        queue.enqueue(selectedNode.right);
      }
    }

    return data;
  }

  DFSPreOrder(tree = this.root, currentData = []) {
    const data = [];

    if (tree) {
      data.push(tree.element);
      data.push(...this.DFSPreOrder(tree.left));
      data.push(...this.DFSPreOrder(tree.right));
    }

    return data;
  }

  DFSInOrder(tree = this.root) {
    const data = [];

    if (tree) {
      data.push(...this.DFSInOrder(tree.left));
      data.push(tree.element);
      data.push(...this.DFSInOrder(tree.right));
    }

    return data;
  }

  DFSPostOrder(tree = this.root) {
    const data = [];

    if (tree) {
      data.push(...this.DFSPostOrder(tree.left));
      data.push(...this.DFSPostOrder(tree.right));
      data.push(tree.element);
    }

    return data;
  }
}

const bstObject = new BinarySearchTree();

bstObject.insert(50);
bstObject.insert(40);
bstObject.insert(60);
bstObject.insert(30);
bstObject.insert(49);
bstObject.insert(51);
bstObject.insert(70);
console.log(bstObject.search(40));
console.log(bstObject.BFS());
console.log(bstObject.DFSPreOrder());
console.log(bstObject.DFSInOrder());
console.log(bstObject.DFSPostOrder());
