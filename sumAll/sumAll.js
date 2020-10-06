const sumAll = function (numA, numB) {

    // We need to sum the values of the numbers between a range
    // let one number be equal to 1
    // let another number be equal to 10
    // let sum be equal to 1 + 2 = 3
    // then sum be equal to 3 + 3 = 6

    let sum = 0;
    let error = 'ERROR'
    console.log('First number: ' + numA);
    console.log('Second number: ' + numB);

    if (numA < 0 || Number.isInteger(numA) === false ||
        Number.isInteger(numB) === false) {
        return error;

    } else {
        if (numA < numB) {
            for (i = numA; i <= numB; i++) {
                sum = sum + i;
            }
            return sum;
        } else {
            for (i = numA; i >= numB; i--) {
                sum = sum + i;
            }
            return sum;
        }

    }


}

module.exports = sumAll
