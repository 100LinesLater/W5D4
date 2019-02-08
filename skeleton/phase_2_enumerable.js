Array.prototype.myEach = function (cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

const x = function (i) {
  console.log(i);
};

[1,2,3].myEach(x);

Array.prototype.myMap = function (cb) {
  const mapped = [];
  for(let i = 0; i < this.length; i++) {
    mapped.push(cb(this[i]));
  }
  return mapped;
}

const y = function (i) {
  return i * i;
};

console.log([1,5,3].myMap(y));

Array.prototype.myReduce = function (cb, initialValue = undefined) {
  let accumulator = initialValue;

  for(let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[0];
      continue;
    }
    accumulator = cb(accumulator, this[i]);
  }
  return accumulator;
}

console.log([1,5,3].myReduce(function(acc, el) {
  return acc * el;
}))