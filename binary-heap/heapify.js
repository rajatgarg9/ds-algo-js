function maxHeapify(arr = []) {
  let selectedParentIndex = Math.floor(arr.length / 2) - 1;

  while (selectedParentIndex >= 0) {
    let leftChildIndex = 2 * selectedParentIndex + 1;
    let rightChildIndex = 2 * selectedParentIndex + 2;
    let selectedChildIndex;

    if (leftChildIndex <= arr.length - 1 && rightChildIndex <= arr.length - 1) {
      selectedChildIndex =
        arr[rightChildIndex] > arr[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
    } else if (leftChildIndex <= arr.length - 1) {
      selectedChildIndex = leftChildIndex;
    } else {
      selectedChildIndex = rightChildIndex;
    }

    if (arr[selectedParentIndex] < arr[selectedChildIndex]) {
      [arr[selectedParentIndex], arr[selectedChildIndex]] = [
        arr[selectedChildIndex],
        arr[selectedParentIndex],
      ];
    }

    --selectedParentIndex;
  }

  return arr;
}

console.log(maxHeapify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
