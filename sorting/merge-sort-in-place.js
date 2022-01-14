/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n * Log n)
     - Average Case : Θ(n^2 * Log n)
     - Worst Case : O(n^2 * Log n)
*/

function mergeSortInPlace(arr, startIndex = 0, endIndex = arr?.length - 1) {
  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (startIndex >= endIndex) {
    return arr;
  }

  mergeSortInPlace(arr, startIndex, middleIndex);
  mergeSortInPlace(arr, middleIndex + 1, endIndex);

  return merge(arr, startIndex, middleIndex, endIndex);
}

function merge(arr, startIndex, middleIndex, endIndex) {
  let startIndexLeftArray = startIndex;
  let startIndexRightArray = middleIndex + 1;

  while (
    startIndexLeftArray <= middleIndex &&
    startIndexRightArray <= endIndex
  ) {
    if (arr[startIndexLeftArray] <= arr[startIndexRightArray]) {
      ++startIndexLeftArray;
    } else {
      let selectedRightArrayValue = arr[startIndexRightArray];
      let k = startIndexRightArray - 1;

      while (k >= startIndexLeftArray) {
        arr[k + 1] = arr[k];
        --k;
      }
      arr[k + 1] = selectedRightArrayValue;
      ++startIndexRightArray;
      ++startIndexLeftArray;
      ++middleIndex;
    }
  }

  return arr;
}

console.log(mergeSortInPlace([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(mergeSortInPlace([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
