/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n)
     - Average Case : Θ(n^2)
     - Worst Case : O(n^2)
*/

// Algorithm
/*
  step 1 : Let arr is the array which need to be sort
  step 2 : Set i = 0
  step 3 : if i >= (arr.length -1), Goto step 13
  setp 4 : Set isSwappingDone = false
  setp 5 : Set j = 0
  setp 6 : if j >=( arr.length - i - 1), Goto step 10
  setp 7 : if arr[j] > arr[j+1], Swap value at index j and j+1
  step 8 : Set j = j+ 1
  step 9 : Goto step 6  
  step 10 : if isSwappingDone === false, Goto step 13
  step 11 : i = i + 1
  step 12 : Goto step 2
  setp 13 : return arr
  step 14 : Exit
*/

// implementation
function bubbleSort(arr) {
  for (let i = 0; i < arr?.length - 1; ++i) {
    let isSwappingDone = false;

    for (let j = 0; j < arr?.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        isSwappingDone = true;
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }

    if (!isSwappingDone) {
      break;
    }
  }

  return arr;
}

// examples

console.log(bubbleSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(bubbleSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
