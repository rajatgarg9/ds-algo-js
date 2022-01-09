// also called sequential search algorithm

/*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/

// Algorithm
/*
  step 1 : Let arr is array and x is search value
  step 2 : set i = 0
  step 3:  if i >= arr.length, goto step 8
  step 4 : if arr[i] === x , goto step 7
  step 5 : set i = i + 1
  step 6 : Goto step 3
  step 7 : return i  
  step 8 : retrun -1
  step 9 : exit
*/

// Implementation
function linearSearch(arr, x) {
  for (let i = 0; i < arr?.length; ++i) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

// examples

console.log(linearSearch([2, 3, 4, 5, 6, 7], 4)); // Output: 2

console.log(linearSearch([2, 3, 4, 5, 6, 7], 20)); // Output: -1
