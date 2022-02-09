class MinHeap {
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

    let selectedChildIndex = this.items.length - 1;

    while (selectedChildIndex > 0) {
      const parentIndex = Math.floor((selectedChildIndex - 1) / 2);

      if (this.items[selectedChildIndex] < this.items[parentIndex]) {
        this.swap(selectedChildIndex, parentIndex);

        selectedChildIndex = parentIndex;
      } else {
        return this.items;
      }
    }
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/
  delete(index = 0) {
    if (index >= this.items.length) {
      return null;
    }

    if (this.items.length === 0 || index === this.items.length - 1) {
      return this.items.pop();
    }
    const minValue = this.items[index];
    this.items[index] = this.items.pop();

    let parentIndex = index;

    while (parentIndex < this.items.length - 1) {
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;
      const selectedChildIndex =
        this.items[rightChildIndex] < this.items[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.items[parentIndex] > this.items[selectedChildIndex]) {
        this.swap(parentIndex, selectedChildIndex);
        parentIndex = selectedChildIndex;
      } else {
        return minValue;
      }
    }

    return minValue;
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/
  extractMin() {
    return this.delete(0);
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  getMin() {
    return this.items[0];
  }

  swap(firstIndex, secondIndex) {
    [this.items[firstIndex], this.items[secondIndex]] = [
      this.items[secondIndex],
      this.items[firstIndex],
    ];
  }
}

const minHeapObj = new MinHeap();

minHeapObj.insert(892);
minHeapObj.insert(1);
minHeapObj.insert(21);
minHeapObj.insert(20);
minHeapObj.insert(32);

minHeapObj.insert(2);
console.log(minHeapObj.items);
minHeapObj.extractMin();
console.log(minHeapObj.items);
minHeapObj.delete(2);
console.log(minHeapObj.items);
