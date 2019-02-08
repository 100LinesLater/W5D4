// function range(start, end) {
//   if (start === end) {
//     return [end];
//   }
//   let arr = range(start + 1, end);
//   console.log(arr, "array");
//   console.log(start, "start");
//   arr.push(start);
//   console.log(arr, "updated");
//   return arr;
// }

// console.log(range(1, 5))

function range(start, end) {
  if (start > end) return [];
  let arr = range(start, end - 1);
  arr.push(end);
  return arr;
}

console.log(range(1,5))

function sumRec(arr) {
  if (arr.length === 0) return 0;
  return arr.shift() + sumRec(arr);
}

console.log(sumRec([1,500,3,4]))

function exponent(base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

console.log(exponent(4,3))

function fibonacci(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let fibs = fibonacci(n - 1);
  fibs.push(fibs[n - 2] + fibs[n - 3]);
  return fibs;
}

console.log(fibonacci(6))

function deepDup(array) {
  return array.map((x) => {
    if (Array.isArray(x)) deepDup(x);
    return x;
  }) 
}

console.log(deepDup([1,[1],3]))