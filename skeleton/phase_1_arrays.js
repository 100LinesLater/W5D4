Array.prototype.uniq = function () {
  let uniqArray = [];

  for(let i = 0; i < this.length; i++) {
    if (!uniqArray.includes(this[i])) {
      uniqArray.push(this[i]);
    } 
  }

  return uniqArray;
}


const arr = [1,2,3,3,4,4,4,5,6,7];

console.log(arr.uniq()); //expected output => [1,2,3,4,5,6,7];

Array.prototype.twoSum = function () {
  const pairs = Array();
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length - 1; j++) {
      if (this[i] + this[j] === 0) pairs.push([this[i], this[j]]);
    }
  }

  return pairs;
}

console.log([1,2,-1,0,3,-2,4].twoSum());

Array.prototype.transpose = function () {
  const transposed = Array();

    for(let i = 0; i < this[0].length; i++) {
      transposed.push([]);
    }

  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      transposed[j].push(this[i][j])
    }
  }

  return transposed;
}

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());



