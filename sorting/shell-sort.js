/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(n * Log n)
     - Average Case : Θ(n^2)
     - Worst Case : O(n^2)
*/

// Algorithm
/*
  step 1: Let arr is the array which need to be sort
  step 2: take gap as the half of the length of array length;
  step 3: Now iterate over arr and compare value at index and index+gap and swap them if value at index+gap is greater.
  step 4: If swap is donein step 3 then compare values at index and index-gap and repeate this process backwards till index is 0.
  step 5: make gap = gap/2, and repeat step 3 and 4 till gap > 1
*/

function shellSort(arr) {
  let gap = Math.floor((arr.length - 1) / 2);

  while (gap > 1) {
    for (let i = 0; i < arr.length - gap; ++i) {
      for (let j = i; j >= 0; j = j - gap) {
        if (arr[j] > arr[j + gap]) {
          swap(arr, j, j + gap);
        } else {
          break;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

function swap(arr, firstIndex, secondIndex) {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
}

console.log(shellSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(shellSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
