function positiveSum(arr) {
  let sum = 0;
  for (let unit of arr) {
    if (typeof unit == 'number'){
      if (unit > 0) {
        sum += unit;
      }
    }  
  }
  return sum;
}

module.exports = positiveSum;
