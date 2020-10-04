const repeatString = function(str, times) {
    let repeatedString = '';

    // loop set by the input of the parameter
    while (times > 0){
        repeatedString = repeatedString + str;
        times--;

        
    }

    if(times < 0){
        repeatedString = 'ERROR';
    }
    
    return repeatedString;


}

module.exports = repeatString
