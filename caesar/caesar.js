const caesar = function (str, num) {

    // In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

    // Create a crypto Key of the alphabet. This needs to be an array
    const upperCryptoKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Create a crypto Key of the alphabet. This needs to be an array
    const lowerCryptoKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');

    let alphabet = [];
    let regex = /[\s,!.?]/;

    // Let's say the str is 'A', we will need to find the position of A in the key, add the inputted number as the digits to move across the key, select that new character as the replacement

    // Find the index of the inputted String in the key
    // Need to put this in a for loop if there are multiple characters
    // Think we need to split str into an array so we go one by one across each character
    let arr = str.split('');

    function replaceLetter(letter, num, alphabet){
        let index = alphabet.indexOf(letter); // Finding the index of the letter in the alphabet
        console.log("index in alphabet is: " + index);
        let newIndex = index + num; // Get the new numeric index using the inputted digit

        if(newIndex > (alphabet.length - 1)){
            newIndex = newIndex % alphabet.length;
        } else if(newIndex < 0){
            newIndex = alphabet.length - Math.abs(newIndex);
        }

        console.log('newIndex is: ' + newIndex)

        let newLetter = alphabet[newIndex];
        console.log('New letter is: ' + newLetter);

        return newLetter;
    }

    for (i = 0; i < arr.length; i++) {

        let letter = arr[i];
        console.log('letter to change: ' + letter);

        // Need to determine which alphabet to use first or if it even needs to be done

        // if (letter = comma, space, explanation point)
        // then newLetter = arr[i];
        if(regex.exec(letter)){
            continue;
            // newLetter = arr[i];
        }else if (letter == letter.toUpperCase()) {

            alphabet = upperCryptoKey;
            newLetter = replaceLetter(letter, num, alphabet);

        } else if (letter == letter.toLowerCase()) {

            alphabet = lowerCryptoKey;
            newLetter = replaceLetter(letter, num, alphabet);

        }

        
        arr[i] = newLetter;
    }

    console.log('New arr is: ' + arr.join(''));
    return arr.join('');

}

module.exports = caesar
