/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     let n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0; // If digit is 9, set it to 0 and continue
    }

    return [1, ...digits];
};