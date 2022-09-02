const reverseString = function (phrase) {
    let reversePhrase = "";
    for (let i = 0; i < phrase.length; i++) {
        reversePhrase = reversePhrase.concat(phrase.charAt((phrase.length - 1) - i));
    }

    return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
