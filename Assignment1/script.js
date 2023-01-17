// Iterative method

const fibs = (n) => {
  let arr = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (i = 2; i < n; i++) arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
};

// Recursive method

const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};

// Results

console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13];
console.log(fibs(0)); // returns [];'
console.log(fibs(1)); // returns [0];
console.log(fibs(2)); // returns [0, 1];

console.log(fibsRecurse(0)); // returns []
console.log(fibsRecurse(1)); // returns [0]
console.log(fibsRecurse(2)); // returns [0, 1]
console.log(fibsRecurse(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
