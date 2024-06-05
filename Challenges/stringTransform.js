/**
 * Transforms the input string based on its length:
 * - If the length is divisible by 3, the string is reversed.
 * - If the length is divisible by 5, each character is replaced by its ASCII code, separated by spaces.
 * - If both conditions are met, the ASCII transformation takes precedence.
 * 
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string.
 */
function transformString(str) {
    let length = str.length;
    let result = str;

    // Check if length is divisible by 3
    if (length % 3 === 0) {
        result = result.split('').reverse().join('');
    }

    // Check if length is divisible by 5
    if (length % 5 === 0) {
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    // Check if length is divisible by both 3 and 5  
    if (length % 3 === 0 && length % 5 === 0) {
        result = result.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// Example usage and testing
let input = "Hello World";
let output = transformString(input);
console.log(transformString("Hello World")); // Outputs: "87 101 108 108 111 32 87 111 114 108 100"

// Additional test cases
console.log(transformString("Jado")); // Length is 4 is not divisible by 3 or 5, so the string remains unchanged.
console.log(transformString("Orange is Fruit")); // Length 15, divisible by 3 and 5, should transform to ASCII:"79 114 97 110 103 101 32 105 115 32 70 114 117 105 116"
console.log(transformString("Rwanda Nziza")); //Length 12, divisible by 3, should reverse:"azizN adnaR"
console.log(transformString("12345"));  // Length 5 (divisible by 5), should convert to ASCII: "49 50 51 52 53"
console.log(transformString("123"));    // Length 3 (divisible by 3), should reverse: "321"
console.log(transformString(""));       // Length 0 (divisible by both 3 and 5), should return an empty string: ""
