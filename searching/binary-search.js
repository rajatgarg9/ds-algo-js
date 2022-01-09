/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(Log n)
     - Worst Case : O(Log n)
*/

// Algorithm
/*
  step 1 : Let arr is array and x is search value.
  step 2 : Set startIndex = 0  and lastIndex = arr.length are the range position of array
  step 3 : Set middleIndex = startIndex + Math.floor((lastIndex - startIndex)/2)
  step 4 : if(arr[middleIndex] === x), goto step 8
  step 5 : if(startIndex === lastIndex), goto step 9 
  step 6:  if arr[middleIndex] > x, Set lastIndex = middleIndex - 1,  goto step 2.
  step 7 :if arr[middleIndex] < x, Set startIndex = middleIndex + 1,  goto step 2.
  step 8 : return middleIndex 
  step 9: return -1 
  step 10 : exit
*/

// Implementation
function binarySearch(arr, x) {
  let startIndex = 0;
  let lastIndex = arr?.length;

  while (true) {
    let middleIndex = startIndex + Math.floor((lastIndex - startIndex) / 2);
    if (arr[middleIndex] === x) {
      return middleIndex;
    }
    if (startIndex === lastIndex) {
      return -1;
    }

    if (arr[middleIndex] > x) {
      lastIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
}

// examples

console.log(binarySearch([2, 3, 4, 5, 6, 7], 4)); // Output: 2

console.log(binarySearch([2, 3, 4, 5, 6, 7], 20)); // Output: -1
