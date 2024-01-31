const palindromes = function (string) {
    return string.split("").reverse().join("").toLowerCase().replace(/[^a-z0-9]/gi, '') == string.toLowerCase().replace(/[^a-z0-9]/gi, '');
};

// Do not edit below this line
module.exports = palindromes;
