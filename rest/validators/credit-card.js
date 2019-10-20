const luhn = require('../util/luhn');
// Credit card number validations
module.exports = (number) => {
    if (!/^\d+$/.test(number)) {
        throw new Error('Credit card number will always be numeric');
    }
    if (number.length > 19) {
        throw new Error('Credit card number length is up to 19 characters');
    }
    if (!luhn(number)) {
        throw new Error('Credit card number is invalid');
    }
};