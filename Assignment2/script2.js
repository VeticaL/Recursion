const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const split = Math.floor(arr.length / 2);
  const left = arr.slice(0, split);
  const right = arr.slice(split, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (l, r) => {
  const result = [];
  while (l.length > 0 && r.length > 0) {
    const arrayWithMin = l[0] < r[0] ? l : r;
    const mergeElement = arrayWithMin.shift();
    result.push(mergeElement);
  }

  return result.concat(l, r);
};

//Results
console.log(mergeSort([4, 6, 8, 7, 1, 3, 2, 5])); // returns [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([1])); // returns [1]
 