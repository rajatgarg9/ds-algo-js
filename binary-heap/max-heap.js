class MaxHeap {
  constructor() {
    this.items = [];
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/
  insert(element) {
    this.items.push(element);
    let slectedIndex = this.items.length - 1;

    while (slectedIndex > 0) {
      let previousIndex = Math.floor((slectedIndex - 1) / 2);

      if (this.items[slectedIndex] > this.items[previousIndex]) {
        [this.items[slectedIndex], this.items[previousIndex]] = [
          this.items[previousIndex],
          this.items[slectedIndex],
        ];
        slectedIndex = previousIndex;
      } else {
        return this.items;
      }
    }

    return this.items;
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  getMax() {
    return this.items[0];
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/
  extractMax() {
    return this.delete(0);
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/
  delete(index = 0) {
    if (index >= this.items.length) {
      return undefined;
    }

    if (this.items.length === 1 || index === this.items.length - 1) {
      return this.items.pop();
    }
    const deletedValue = this.items[index];
    this.items[index] = this.items.pop();

    let selectedParentIndex = index;

    while (selectedParentIndex < this.items.length - 1) {
      const leftChildIndex = 2 * selectedParentIndex + 1;
      const rightChildIndex = 2 * selectedParentIndex + 2;
      const selectedChildIndex =
        this.items[rightChildIndex] > this.items[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.items[selectedChildIndex] > this.items[selectedParentIndex]) {
        [this.items[selectedChildIndex], this.items[selectedParentIndex]] = [
          this.items[selectedParentIndex],
          this.items[selectedChildIndex],
        ];
        selectedParentIndex = selectedChildIndex;
      } else {
        return deletedValue;
      }
    }

    return deletedValue;
  }
}

const maxHeapObj = new MaxHeap();
maxHeapObj.insert(1);
maxHeapObj.insert(2);
maxHeapObj.insert(20);
maxHeapObj.insert(32);
maxHeapObj.insert(892);
maxHeapObj.insert(21);
console.log(maxHeapObj.items);
maxHeapObj.extractMax();
console.log(maxHeapObj.items);
maxHeapObj.delete(4);
console.log(maxHeapObj.items);
