function add (a, b) {
	total = a + b;
	return total;
}

function subtract (a, b) {
	total = a - b;
	return total;
}

function sum (array1) {
	// Need to sum the values of an array
	// We can use array.reduce

	/* if(array1 === undefined || ){
		return 0;
		
		}  else {

			const totalSum = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
	
			return totalSum;
		} */
	
	return array1.length == 0 ? 0 : array1.reduce((accumulator, currentValue) => accumulator + currentValue)
	
}

function multiply (array1) {

	// Use reduce() here again, but multiple instead
	return array1.length == 0 ? 0 : array1.reduce((accumulator, currentValue) => accumulator * currentValue)
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}