/**
 * Format Credit card Number
 * @param number
 * @returns {string}
 */
export default (number) => {
    return number ? number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim() : '';
}