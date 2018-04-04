// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
    const reverseArr = str.split('');

    return reverseArr.every((char, i) => {
        return char === reverseArr[(reverseArr.length - i - 1)]
    })
}


// function palindrome(str) {
//     const reverseStr = function (value) {
//         let newStr = '';
//         for (let char of value) {
//             newStr = char + newStr;
//         }
//         return newStr;
//     };
//     return reverseStr(str.trim()) === str;
// }

// function palindrome(str) {
//     return str.split('').reverse().join('') === str;
// }

module.exports = palindrome;
