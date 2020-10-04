const removeFromArray = function() {

    // We have an input array through the parameter
    // We need to use splice to remove the index of item 'num' from the array

    // console.log('Number of arguments: ' + arguments.length);
    // if(arguments.length <= 2){

   
    // console.log('input array is: ' + arr);
    // let index = num - 1;
    // let removed = arr.splice(index, 1);
    // console.log('Removed item is: ' + removed);

    // console.log('array is now: ' + arr);
    // return arr;
    // } else {

        let args = Array.from(arguments);
        let arr = args[0];
        

        for(i=1; i < args.length; i++){
            // get index of the current argument in the array, that is not 0
            // Let's convert it into a real array
            
            
            // Finding values of the arguments. We are skipping the array value (i=0)
            let argValue = args[i];
            console.log('Value of the argument: ' + argValue);

            // We have the values of the arguments in argValue
            // Let's search the inputted array to see if we can find out if the value exists in the inputted array
            // We will get the location of the argument value in the array
            let valueLocation = arr.indexOf(argValue);
            console.log('The argument value location within the array is: ' + valueLocation);

            if(valueLocation != -1){
            // We now have the value location in the array. It's time to remove it from the array
            let removed = arr.splice(valueLocation, 1);
            console.log('Removed value is: ' + removed);
            console.log('Updated array is now: ' + arr);
            }



        }
        return arr;

    }

    // What if we find indexof then we know what to splice
//}

module.exports = removeFromArray
