const Queue = require("./queue");

class Node {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

/*
   Space Complexity: O(n)
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /*
   Time Complexity
     - Best Case : Ω(Log n)
     - Average Case : Θ(Log n)
     - Worst Case : O(n)
*/
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

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(n)
*/
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

  /*
   Time Complexity
     - Best Case : Ω(Log n)
     - Average Case : Θ(Log n)
     - Worst Case : O(n)
*/
  findMaxValue(tree = this.root) {
    if (!tree) {
      return undefined;
    }
    let maxValue = tree.element;
    let selectedNode = tree;

    while (selectedNode) {
      if (selectedNode.element > maxValue) {
        maxValue = selectedNode.element;
      }

      selectedNode = selectedNode.right;
    }

    return maxValue;
  }

  /*
   Time Complexity
     - Best Case : Ω(Log n)
     - Average Case : Θ(Log n)
     - Worst Case : O(n)
*/
  findMinValue(tree = this.root) {
    if (!tree) {
      return undefined;
    }
    let minValue = tree.element;
    let selectedNode = tree;

    while (selectedNode) {
      if (selectedNode.element < minValue) {
        minValue = selectedNode.element;
      }

      selectedNode = selectedNode.left;
    }

    return minValue;
  }

  /*
   Time Complexity
     - Best Case : Ω(Log n)
     - Average Case : Θ(Log n)
     - Worst Case : O(n)
*/
  delete(element) {
    let selectedNode = this.root;
    let deletedNode;

    while (selectedNode) {
      let nextNode;
      if (selectedNode.element === element) {
        nextNode = selectedNode;
      } else if (selectedNode.element > element) {
        nextNode = selectedNode.left;
      } else {
        nextNode = selectedNode.right;
      }

      if (nextNode.element === element) {
        deletedNode = JSON.parse(JSON.stringify(nextNode));
        if (!nextNode.left && !nextNode.right) {
          if (selectedNode.element === element) {
            this.root = null;
          } else if (selectedNode.element > element) {
            selectedNode.left = null;
          } else {
            selectedNode.right = null;
          }
        } else if (nextNode.left) {
          const maxValue = this.findMaxValue(nextNode.left);
          this.delete(maxValue);
          nextNode.element = maxValue;
        } else {
          const minValue = this.findMinValue(nextNode.right);
          this.delete(minValue);
          nextNode.element = minValue;
        }

        return deletedNode;
      }
      selectedNode = nextNode;
    }
  }

  /*
   Space Complexity: O(n)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
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

  /*
   Space Complexity: O(h)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  DFSPreOrder(tree = this.root) {
    const data = [];

    if (tree) {
      data.push(tree.element);
      data.push(...this.DFSPreOrder(tree.left));
      data.push(...this.DFSPreOrder(tree.right));
    }

    return data;
  }

  /*
   Space Complexity: O(h)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  DFSInOrder(tree = this.root) {
    const data = [];

    if (tree) {
      data.push(...this.DFSInOrder(tree.left));
      data.push(tree.element);
      data.push(...this.DFSInOrder(tree.right));
    }

    return data;
  }

  /*
   Space Complexity: O(h)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
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
console.log(bstObject.findMaxValue());
console.log(bstObject.findMinValue());
console.log(bstObject.delete(70));
