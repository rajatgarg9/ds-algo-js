/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n^2)
     - Average Case : Θ(n^2)
     - Worst Case : O(n^2)
*/

// Algorithm
/*
  step 1: Let arr is the array which need to be sort
  step 2: Set i = 0;
  step 3: if i >= arr.length, Goto step 11
  step 4: Set lowestValueIndex = i
  step 5: Set j = j + 1;
  step 6: if j >= arr.length, Goto step 9
  step 7: if arr[i] > arr[j] , lowestValueIndex =j
  step 8: Set j= j + 1
  step 8: Goto step 6
  step 9: if i !== lowestValueIndex then swap values at position i and lowestValueIndex
  step 10: Set i = i + 1, Goto step 3
  step 11: retrun arr
  step 12: Exit 
*/

function selectionSort(arr) {
  for (let i = 0; i < arr?.length; ++i) {
    let lowestValueIndex = i;
    for (let j = i + 1; j < arr?.length; ++j) {
      if (arr[lowestValueIndex] > arr[j]) {
        lowestValueIndex = j;
      }
    }

    if (lowestValueIndex !== i) {
      arr[i] = arr[i] + arr[lowestValueIndex];
      arr[lowestValueIndex] = arr[i] - arr[lowestValueIndex];
      arr[i] = arr[i] - arr[lowestValueIndex];
    }
  }

  return arr;
}

// examples

console.log(selectionSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
