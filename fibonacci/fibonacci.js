const fibonacci = function(num) {
  // a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
  
  // If they input function(3) then they should be able to receive
  // the sum of all the numebers up to that point in the array
  
  // Let's create the alg to sum the numbers
  
  arr = [1, 1, 2, 3, 5, 8];
  
  // We can use a reduce function, but depending on the number inputted. So we need to first create a new array based on the input using slice
  
  let arrFib = arr.slice(0, num+1);

  // Now we can use reduce
  let sum = arrFib.reduce(function(total, arrNum) {
                          return total + arrNum;
                          }, 0);
  
  console.log(sum);
  
  // now we can create the fibonacci sequence
}

// module.exports = fibonacci
