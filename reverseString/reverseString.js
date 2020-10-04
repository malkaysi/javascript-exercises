const reverseString = function (str) {
    let reversedString = '';
    console.log('str: ' + str);

    // We have a string

    if (str.indexOf(' ') >= 0){
        let splitStr = str.split(' ');
        console.log('splitStr: ' + splitStr);

        // Assign words from an array
        let word1 = splitStr[0];
        let word2 = splitStr[1];

        // Split the words up into another array as letters
        let splitWord1 = word1.split('');
        console.log('Split word 1: ' + splitWord1);
        let splitWord2 = word2.split('');
        console.log('Split word 2: ' + splitWord2);

        //Reverse the array
        let reversedSplitWord1 = splitWord1.reverse();
        console.log('reversedSplitWord1: ' + reversedSplitWord1);
        let reversedSplitWord2 = splitWord2.reverse();
        console.log('reversedSplitWord2: ' + reversedSplitWord2);

        // Join the array into a word
        let reversedWord1 = reversedSplitWord1.join(''); 
        console.log('reversedWord1: ' + reversedWord1);
        let reversedWord2 = reversedSplitWord2.join(''); 
        console.log('reversedWord2: ' + reversedWord2);

        // Create the string
        reversedString = reversedWord2 + ' ' + reversedWord1;

    } else {

        // We split the string into individual letters
        let splitStr = str.split('');
        console.log('splitStr: ' + splitStr);

        // We use .reverse() on the split array to reverse it
        let reversedSplit = splitStr.reverse();
        console.log('reversedSplit: ' + reversedSplit);

        // Then we combine the array back into a string
        reversedString = reversedSplit.join('');
        console.log('reversedString: ' + reversedString);

    } 

    /*
    We were able to reverse a single word
    If there are multiple words
    To reverse a sentence, we can split the input into an array using a space ' ' instead of no space ''
    We assign each word to a variable like splitWord1, splitWord2, depending on the size of the array
    We then split the words into an array arrayWord1, arrayWord 2
    We reverse and then put it back together

    */


    return reversedString;

}

module.exports = reverseString
