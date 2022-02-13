const maxHeapify = require("../binary-heap/max-heapify");

/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n * Log n)
     - Worst Case : O(n * Log n)
*/
function heapSort(arr = []) {
  maxHeapify(arr);
  for (let i = arr.length - 1; i > 0; --i) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    const newlastIndex = i - 1;
    let selectedParentIndex = 0;

    while (selectedParentIndex <= newlastIndex) {
      const leftChildIndex = 2 * selectedParentIndex + 1;
      const rightChildIndex = 2 * selectedParentIndex + 2;
      let selectedChildIndex;

      if (leftChildIndex <= newlastIndex && rightChildIndex <= newlastIndex) {
        selectedChildIndex =
          arr[rightChildIndex] > arr[leftChildIndex]
            ? rightChildIndex
            : leftChildIndex;
      } else if (leftChildIndex <= newlastIndex) {
        selectedChildIndex = leftChildIndex;
      } else if (rightChildIndex <= newlastIndex) {
        selectedChildIndex = rightChildIndex;
      } else {
        break;
      }

      if (arr[selectedChildIndex] > arr[selectedParentIndex]) {
        [arr[selectedChildIndex], arr[selectedParentIndex]] = [
          arr[selectedParentIndex],
          arr[selectedChildIndex],
        ];

        selectedParentIndex = selectedChildIndex;
      } else {
        break;
      }
    }
  }

  return arr;
}

// examples

console.log(heapSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(heapSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
