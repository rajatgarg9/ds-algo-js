class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  add(element) {
    const newNode = new Node(element);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    ++this.size;

    return newNode;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  inserAt(element, index) {
    const newNode = new Node(element);
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 1; i <= index; ++i) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
    }
    ++this.size;
    return newNode;
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

    let selectedNode;

    if (index === 0) {
      if (this.size === 1) {
        selectedNode = this.head;
        this.head = null;
        this.tail = null;
      } else {
        selectedNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;

        if (this.size === 2) {
          this.tail = this.head;
        }
      }
    } else if (index === this.size - 1) {
      selectedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;

      if (this.size === 2) {
        this.head = this.tail;
      }
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index; ++i) {
        currentNode = currentNode.next;
      }

      selectedNode = currentNode;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }

    --this.size;
    return selectedNode;
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

    let currentNode = this.head;

    for (let i = 0; i < this.size; ++i) {
      if (currentNode.element === element) {
        if (i === 0) {
          if (this.size === 1) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.next;
            this.head.prev = null;

            if (this.size === 2) {
              this.tail = this.head;
            }
          }
        } else if (i === this.size - 1) {
          this.tail = this.tail.prev;
          this.tail.next = null;

          if (this.size === 2) {
            this.head = this.tail;
          }
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }

        --this.size;
        return 0;
      }

      currentNode = currentNode.next;
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
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  isEmpty() {
    return this.size === 0;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  sizeOfList() {
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

    for (let i = 0; i < this.size; ++i) {
      output = `${output}${currentNode.element},`;
      currentNode = currentNode.next;
    }

    return output;
  }
}

const doubleLinkedListObj = new DoubleLinkedList();

doubleLinkedListObj.inserAt(224, 0);
doubleLinkedListObj.inserAt(225, 1);
doubleLinkedListObj.inserAt(226, 2);
doubleLinkedListObj.inserAt(228, 3);
doubleLinkedListObj.add(4);
doubleLinkedListObj.add(6);

console.log(doubleLinkedListObj);
