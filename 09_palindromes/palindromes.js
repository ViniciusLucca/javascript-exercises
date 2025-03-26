const palindromes = function (str) {
    str = str.toLowerCase();
    str = Array.from(str);
    // let punctuation = [...("!,.")]
    str = str.filter((item) => item != '!' && item != ',' && item != '.' && item != ' ');
    let reverseStr = str.toReversed();
    for (let i = 0; i < str.length; i++) {
        if (str[i] != reverseStr[i]) return false
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
