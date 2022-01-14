/*
   Space Complexity: O(n)

   Time Complexity
     - Best Case : Ω(n * Log n)
     - Average Case : Θ(n * Log n)
     - Worst Case : O(n * Log n)
*/

// Algorithm
/*
  step 1: Let arr is the array,startIndex and endIndex are the starting and ending index of array
  step 2: if endIndex <= startIndex then return array 
  step 3: Find middleIndex of startIndex and endIndex and then again call merge sort recursively with left part and then with right part of array
  step 4: After then merge the both left and right sorted array   
*/

// implementation
function mergeSortOutofPlace(arr, startIndex = 0, endIndex = arr?.length - 1) {
  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (endIndex <= startIndex) {
    return arr;
  }

  mergeSortOutofPlace(arr, startIndex, middleIndex);
  mergeSortOutofPlace(arr, middleIndex + 1, endIndex);

  return merge(arr, startIndex, middleIndex, endIndex);
}

function merge(arr, startIndex, middleIndex, endIndex) {
  const leftArray = [];
  const rightArray = [];

  for (let i = startIndex; i <= middleIndex; ++i) {
    leftArray.push(arr[i]);
  }
  for (let j = middleIndex + 1; j <= endIndex; ++j) {
    rightArray.push(arr[j]);
  }

  let i = 0;
  let j = 0;
  let k = startIndex;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] > rightArray[j]) {
      arr[k] = rightArray[j];
      ++j;
    } else {
      arr[k] = leftArray[i];
      ++i;
    }
    ++k;
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    ++i;
    ++k;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    ++j;
  }

  return arr;
}

// examples

console.log(mergeSortOutofPlace([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(mergeSortOutofPlace([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
