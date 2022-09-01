const repeatString = function(phrase, num) {
    //doing it with just arrays
    // const words = new Array(num);
    // words.fill(phrase);
    // return words.join("");

    //doing it with just string
    // return phrase.repeat(num);

    //doing it with loops
    let words = phrase;
    for(let i = 0; i < num - 1; i++){
        words += phrase;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
