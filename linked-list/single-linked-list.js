class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  add(element) {
    const newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let selectedNode = this.head;
      while (selectedNode.next) {
        selectedNode = selectedNode.next;
      }
      selectedNode.next = newNode;
    }
    ++this.size;

    return this.size;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return this.size;
    }
    const newNode = new Node(element);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previousNode = this.head;

      for (let i = 1; i < index; ++i) {
        previousNode = previousNode.next;
      }

      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }
    ++this.size;

    return this.size;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode;
    if (index === 0) {
      currentNode = this.head;
      this.head = this.head.next;
    } else {
      let previousNode = this.head;

      for (let i = 1; i < index; ++i) {
        previousNode = previousNode.next;
      }

      currentNode = previousNode.next;

      previousNode.next = previousNode.next.next;
    }

    --this.size;
    return currentNode.element;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  removeElement(element) {
    if (this.size === 0) {
      return -1;
    }

    if (this.head.element === element) {
      this.head = this.head.next;
      --this.size;
      return 0;
    } else {
      let previousNode = this.head;

      for (let i = 1; i < this.size; ++i) {
        if (previousNode.next.element === element) {
          previousNode.next = previousNode.next.next;
          --this.size;
          return i;
        }
        previousNode = previousNode.next;
      }
    }

    return -1;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  indexOf(element) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (currentNode.element === element) {
        return i;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  isEmpty() {
    return this.size == 0;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  sizeofList() {
    return this.size;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  printList() {
    let output = "";

    let currentNode = this.head;

    while (currentNode) {
      output = `${output}${currentNode.element},`;
      currentNode = currentNode.next;
    }

    return output;
  }
}

const singleLinkedListObj = new SingleLinkedList();
console.log(singleLinkedListObj);

singleLinkedListObj.add(2);
singleLinkedListObj.add(3);
singleLinkedListObj.insertAt(4, 2);
singleLinkedListObj.insertAt(4, 2);
singleLinkedListObj.removeFrom(2);
singleLinkedListObj.indexOf(3);

console.log(singleLinkedListObj.printList());
