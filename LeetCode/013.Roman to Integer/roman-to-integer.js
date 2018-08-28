/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let special = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    };

    let r = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        let first = s[i];
        let second = s[i + 1];
        if (second && special[first + second]) {
            r += special[first + second];
            i++;
        } else {
            r += map[first];
        }
    }
    return r;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));