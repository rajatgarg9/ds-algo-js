/*
   Space Complexity: O(n + b)

   Time Complexity
     - Best Case : O(d * (n+b))
     - Average Case : Θ(d * (n+b))
     - Worst Case : O(d * (n+b))
*/

// Algorithm
/*
  1. Let arr is the input array
  2. find max digit length in the value
  3. Now iterate over digit length and sort arr on the basis of selected digit posion by using counting sort
*/

function radixSort(arr) {
  let d = 0;

  for (let i = 0; i < arr?.length; ++i) {
    const selectedNumberLength = getNumberLength(arr[i]);

    if (selectedNumberLength > d) {
      d = selectedNumberLength;
    }
  }

  let currentDigitPosition = 1;

  while (currentDigitPosition <= d) {
    arr = countingSort(arr, currentDigitPosition, 10);
    ++currentDigitPosition;
  }

  return arr;
}

function countingSort(arr, digitPosition, b = 10) {
  let countArray = new Array(b);

  for (let i = 0; i < countArray.length; ++i) {
    countArray[i] = 0;
  }

  for (let i = 0; i < arr?.length; ++i) {
    ++countArray[getDigitByPosition(arr[i], digitPosition)];
  }

  for (let i = 1; i < countArray.length; ++i) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  const output = [];

  for (let i = arr?.length - 1; i >= 0; --i) {
    const selectedIndex =
      countArray[getDigitByPosition(arr[i], digitPosition)] - 1;
    output[selectedIndex] = arr[i];
    --countArray[getDigitByPosition(arr[i], digitPosition)];
  }

  return output;
}

function getDigitByPosition(num, position = 1) {
  if (typeof num !== "number") {
    return 0;
  }

  return Math.floor(parseInt(num) / Math.pow(10, position - 1)) % 10;
}

function getNumberLength(num) {
  if (typeof num !== "number") {
    return 0;
  }

  return Math.ceil(num).toString().length;
}

// examples

console.log(radixSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(radixSort([5, 4, 3, 2, 1])); // Output: [1,2,3,4,5]
