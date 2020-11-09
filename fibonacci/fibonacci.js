const fibonacci = function (num) {
  // a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. 

  let arr = [1];
  let sum;

  // let arrFib;

  // We have the general algorith, but we need to use a loop to append to arr instead of using an existing array

  if (num < 0) {
    return 'OOPS'
  } else {
    for (i = 0; i < num - 1; i++) {
      // arrFib = arr.slice(0, i);

      // Now we can use reduce
      /* let sum = arrFib.reduce(function (total, arrNum) {
        return total + arrNum;
      }, 0); */

      // Reduce is wrong. It should be the current i value which is the location of the array + i - 1
      let prevNumIndex = i - 1;
      let prevNum = arr[prevNumIndex];
      let currentNum = arr[i];

      if (i == 0) {
        sum = 1;
      } else if (i > 0) {
        sum = currentNum + prevNum;
      }

      arr.push(sum);

    }
  }
  console.log('Sum is: ' + sum);
  return sum;

}

module.exports = fibonacci