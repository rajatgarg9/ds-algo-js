/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/

function minHeapify(arr = []) {
  const lastInternalNode = Math.floor(arr.length / 2) - 1;

  for (let i = lastInternalNode; i >= 0; --i) {
    let selectedParentIndex = i;

    while (selectedParentIndex <= lastInternalNode) {
      const leftChildIndex = 2 * selectedParentIndex + 1;
      const rightChildIndex = 2 * selectedParentIndex + 2;
      let selectedChildIndex;

      if (
        leftChildIndex <= arr.length - 1 &&
        rightChildIndex <= arr.length - 1
      ) {
        selectedChildIndex =
          arr[rightChildIndex] < arr[leftChildIndex]
            ? rightChildIndex
            : leftChildIndex;
      } else if (leftChildIndex > arr.length - 1) {
        selectedChildIndex = leftChildIndex;
      } else {
        selectedChildIndex = rightChildIndex;
      }

      if (arr[selectedParentIndex] > arr[selectedChildIndex]) {
        [arr[selectedParentIndex], arr[selectedChildIndex]] = [
          arr[selectedChildIndex],
          arr[selectedParentIndex],
        ];
        selectedParentIndex = selectedChildIndex;
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(minHeapify([9, 18, 7, 6, 5, 4, 3, 2, 1]));
