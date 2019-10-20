//Luhn algorithm to validate credit card number
module.exports = (function (array) {
    return function luhn(number) {
        number = number ? number.toString().replace(/\s/g, "") || '' : '';
        let length = number.length;
        let bit = 1;
        let sum = 0;
        let value;

        while (length) {
            value = parseInt(number.charAt(--length), 10);
            bit ^= 1;
            sum += bit ? array[value] : value;
        }

        return sum % 10 === 0;
    }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));