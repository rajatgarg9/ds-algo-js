const insertionSort = require("./insertion-sort");

/*
   Space Complexity: O(n)

   Time Complexity
     - Best Case :
     - Average Case :
     - Worst Case : O(n^2)
*/

function bucketSort(arr) {
  const bucket = new Array(10);

  for (let i = 0; i < bucket.length; ++i) {
    bucket[i] = [];
  }

  for (let i = 0; i < arr?.length; ++i) {
    const selectedIndex = Math.floor(arr[i] * 10);
    bucket[selectedIndex].push(arr[i]);
  }

  for (let i = 0; i < bucket.length; ++i) {
    if (bucket[i].length > 1) {
      bucket[i] = insertionSort(bucket[i]);
    }
  }

  let outputIndex = 0;

  for (let i = 0; i < bucket.length; ++i) {
    let j = 0;

    while (j < bucket[i].length) {
      arr[outputIndex] = bucket[i][j];
      ++outputIndex;
      ++j;
    }
  }

  return arr;
}

console.log(bucketSort([0.49, 0.44, 0.5, 0.36]));
