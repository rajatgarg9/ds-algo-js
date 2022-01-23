/*
   Space Complexity: O(n+k)

   Time Complexity
     - Best Case : Ω(n+k)
     - Average Case : Θ(n+k)
     - Worst Case : O(n^2)
*/

// Algorithm
/*
  1. Let arr is the input array
  2. Take startIndex as pivot and then put greater value than pivot on right side and smaller value on left side
  3. now recursively call left and right part of array
  4. when arr length is 1 the return arr
*/

function quickSortFirstElement(
  arr,
  startIndex = 0,
  endIndex = arr?.length - 1
) {
  if (startIndex >= endIndex) {
    return arr;
  }

  const partitionIndex = partition(arr, startIndex, endIndex);

  quickSortFirstElement(arr, startIndex, partitionIndex - 1);
  quickSortFirstElement(arr, partitionIndex + 1, endIndex);

  return arr;
}

function partition(arr, startIndex = 0, endIndex = arr?.length - 1) {
  const pivotIndex = startIndex;
  let startPointer = startIndex;
  let endPointer = endIndex;

  while (endPointer > startPointer) {
    while (arr[pivotIndex] >= arr[startPointer]) {
      ++startPointer;
    }
    while (arr[pivotIndex] < arr[endPointer]) {
      --endPointer;
    }
    if (endPointer > startPointer) {
      swap(arr, startPointer, endPointer);
    }
  }

  swap(arr, startIndex, endPointer);

  return endPointer;
}

function swap(arr, firstIndex, secondIndex) {
  if (firstIndex === secondIndex) {
    return arr;
  }
  arr[firstIndex] = arr[firstIndex] + arr[secondIndex];
  arr[secondIndex] = arr[firstIndex] - arr[secondIndex];
  arr[firstIndex] = arr[firstIndex] - arr[secondIndex];
}

console.log(quickSortFirstElement([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(quickSortFirstElement([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
