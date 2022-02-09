class MinHeap {
  constructor() {
    this.items = [];
  }

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

  swap(firstIndex, secondIndex) {
    [this.items[firstIndex], this.items[secondIndex]] = [
      this.items[secondIndex],
      this.items[firstIndex],
    ];
  }
}

const minHeapObj = new MinHeap();
minHeapObj.insert(1);
minHeapObj.insert(2);
minHeapObj.insert(20);
minHeapObj.insert(32);
minHeapObj.insert(892);
minHeapObj.insert(21);
console.log(minHeapObj.items);
