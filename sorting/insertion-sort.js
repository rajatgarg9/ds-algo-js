/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n^2)
     - Worst Case : O(n^2)
*/

// Algorithm
/*
  step 1: Let arr is the array which need to be sort
  step 2: Set i = 1
  step 3: if i >= arr.length then Goto step 10
  step 4: Set currentValue = arr[i]
  step 5: Set j = i-1
  step 6: if j >= 0 && arr[j] > currentValue , then Set j = j -1, Set arr[j+1] = arr[j], Goto step 6
  step 7: Set arr[j+1]= currentValue
  step 8: Set i = i +1
  step 9: Goto Step 3
  step 10: return arr
  step 11: Exit
*/

// implementation
function insertionSort(arr) {
  let currentValue, j;
  for (let i = 1; i < arr?.length; ++i) {
    currentValue = arr[i];

    j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

// examples

console.log(insertionSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(insertionSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]

module.exports = insertionSort;
