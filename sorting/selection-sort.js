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
  step 3: if i >= arr.length, Goto step 10
  step 4: Set j = j + 1;
  step 5: if j >= arr.length, Goto step 9
  step 6: if arr[i] > arr[j] , swap values at position i and j
  step 7: Set j= j + 1
  step 8: Goto step 6
  step 9: Set i = i + 1, Goto step 3
  step 10: retrun arr
  step 11: Exit 
*/

function selectionSort(arr) {
  for (let i = 0; i < arr?.length; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr?.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      arr[i] = arr[i] + arr[minIndex];
      arr[minIndex] = arr[i] - arr[minIndex];
      arr[i] = arr[i] - arr[minIndex];
    }
  }

  return arr;
}

// examples

console.log(selectionSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
