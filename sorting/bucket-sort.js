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
      bucket[i] = bucketSort(bucket[i]);
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

console.log(bucketSort([0.4, 0.2, 0.5]));
