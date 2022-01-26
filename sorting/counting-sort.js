/*
   Space Complexity: O(n+k)

   Time Complexity
     - Best Case : Ω(n+k)
     - Average Case : Θ(n+k)
     - Worst Case : O(n+k)
*/

// Algorithm
/*
  1. Let arr is the input array
  2. find max value from the arr value
  3. make new array(countArray) of length max value  +1 length and initialize it value 0.
  4. now iterate over arr and use value of arr as index of countArray and store the count of unique values of arr in countArray
  5. now modify countArray in such a way that vaue at each index contain a sum of value at that index and previous index
  6. So now countArray contain the positon of values in arr
  7. now make new array(resultArray) and iterate over arr and find position of each item from countArray and put it in resultArray
  8. return resultArray
*/

function countingSort(arr) {
  let maxNumber = 0;
  let minNumber = 0;
  let maxDecimalLength = 0;

  for (let i = 0; i < arr?.length; ++i) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }

    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }

    const decimalPointsNumber = getDecimalPointsNumber(arr[i]);

    if (decimalPointsNumber > maxDecimalLength) {
      maxDecimalLength = decimalPointsNumber;
    }
  }

  const countArray = new Array(
    normaliseValue(maxNumber, minNumber, maxDecimalLength) + 1
  );

  for (let i = 0; i < countArray?.length; ++i) {
    countArray[i] = 0;
  }

  for (let i = 0; i < arr?.length; ++i) {
    ++countArray[normaliseValue(arr[i], minNumber, maxDecimalLength)];
  }

  for (let i = 1; i < countArray?.length; ++i) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  const resultArray = [];

  for (let i = arr?.length - 1; i >= 0; --i) {
    const selectedNumber = normaliseValue(arr[i], minNumber, maxDecimalLength);
    const selectedNumberIndex = countArray[selectedNumber] - 1;
    resultArray[selectedNumberIndex] = arr[i];
    --countArray[selectedNumber];
  }

  return resultArray;
}

function getDecimalPointsNumber(num) {
  const numSplit = num?.toString().split(".");

  return numSplit[1]?.length || 0;
}

function normaliseValue(index, min, decimalLength = 0) {
  const multiplier = decimalLength === 0 ? 1 : 10 * decimalLength;
  return (index - min) * multiplier;
}

// examples

console.log(countingSort([5, 1, 23, 4, 1, 233, 1, 3, 5])); // Output: [1, 1,1, 3, 4,5, 5, 23,233]
console.log(countingSort([5, 4, 3, 2, 1, -3, -4, -1, 0.8, 0.6, 0.9])); // Output: [1,2,3,4,5]
