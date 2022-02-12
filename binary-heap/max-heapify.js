/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/

function maxHeapify(arr = [], arrLastIndex = arr.length - 1) {
  const internalNodeLastIndex = Math.floor(arrLastIndex / 2);
  for (let i = internalNodeLastIndex; i >= 0; --i) {
    let selectedParentIndex = i;
    while (selectedParentIndex <= internalNodeLastIndex) {
      let leftChildIndex = 2 * selectedParentIndex + 1;
      let rightChildIndex = 2 * selectedParentIndex + 2;
      let selectedChildIndex;

      if (leftChildIndex <= arrLastIndex && rightChildIndex <= arrLastIndex) {
        selectedChildIndex =
          arr[rightChildIndex] > arr[leftChildIndex]
            ? rightChildIndex
            : leftChildIndex;
      } else if (leftChildIndex <= arrLastIndex) {
        selectedChildIndex = leftChildIndex;
      } else if (rightChildIndex <= arrLastIndex) {
        selectedChildIndex = rightChildIndex;
      } else {
        break;
      }

      if (arr[selectedParentIndex] < arr[selectedChildIndex]) {
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

module.exports = maxHeapify;

// console.log(maxHeapify([1, 2, 3, 4, 5, 6, 17, 8, 9]));
