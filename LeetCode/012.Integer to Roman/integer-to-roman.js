/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        50: 'L',
        40: 'XL',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    let keys = Object.keys(map);

    let r = '';
    while (num > 0) {
        let start = num >= 50 ? keys.length - 1 : 6;
        for (let i = start; i >= 0; i--) {
            if (num >= keys[i]) {
                num -= keys[i];
                r += map[keys[i]];
                break;
            }
        }
    }
    return r;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(49));
console.log(intToRoman(58));
console.log(intToRoman(1994));

