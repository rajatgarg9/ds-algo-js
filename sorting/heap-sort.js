const maxHeapify = require("../binary-heap/max-heapify");

/*
   Space Complexity: O(Log n)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n * Log n)
     - Worst Case : O(n * Log n)
*/
function heapSort(arr = []) {
  for (let i = arr.length - 1; i > 0; --i) {
    maxHeapify(arr, i);

    [arr[0], arr[i]] = [arr[i], arr[0]];
  }

  return arr;
}

// examples

console.log(heapSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(heapSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
