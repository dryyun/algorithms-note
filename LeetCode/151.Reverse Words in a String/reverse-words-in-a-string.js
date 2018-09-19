/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    let arr = str.split(' ');
    arr = arr.filter((data) => {
        return data !== '';
    });
    return arr.reverse().join(' ');
};

console.log(reverseWords("the sky   is blue"));
