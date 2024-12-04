const reverseString = function(string) {
    let reverseString = "";
    for (let i = 1; i <= string.length; i++) {
        let lastChar = string[string.length - i];
        reverseString += lastChar;
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
