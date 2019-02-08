Array.prototype.bubbleSort = function (cb) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for(let i = 0; i < this.length; i++) {
      for(let j = i + 1; j < this.length - 1; j++) {
        
        if (cb(this[i], this[j])) {
          const temp = this[i];
          this[i] = this[j];
          this[j] = temp;
          sorted = false;
        }
      }
    }
  }

  return this; 
}

console.log([7,5,7,4,3,4,5,78,3453].bubbleSort(function(num1, num2) {
  if (num1 <= num2) return false;
  return true; 
}))

String.prototype.substrings = function () {
  let subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let sub = this.slice(i, j + 1);
      if (!subs.includes(sub)) subs.push(sub);
    }
  }
  return subs;
}

console.log("abca".substrings());