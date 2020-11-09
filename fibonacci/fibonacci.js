const fibonacci = function (num) {
  // a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. 

  let arr = [1];

  let arrFib;


  // We have the general algorith, but we need to use a loop to append to arr instead of using an existing array

  for (i = 0; i <= num; i++) {
    arrFib = arr.slice(0, i);

    // Now we can use reduce
    let sum = arrFib.reduce(function (total, arrNum) {
      return total + arrNum;
    }, 0);

    console.log(sum);
    arrFib.push(sum);
  }
  console.log(arrFib);

}

// module.exports = fibonacci