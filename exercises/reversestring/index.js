// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((x, y) => y + x, '')
}

// function reverse(str) {
//     let newStr = '';
//     for(let char of str){
//         newStr = char + newStr;
//     }
//     return newStr;
// }


// function reverse(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverse;
