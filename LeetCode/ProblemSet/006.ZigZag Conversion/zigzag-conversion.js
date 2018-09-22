/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (1 === numRows) {
        return s;
    }

    let arr = Array(numRows).fill(0);
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }

    let x = 0, acol = true; // acol 是否是一列
    for (let i = 0, len = s.length; i < len; i++) {
        arr[x].push(s[i]);

        if (acol && x !== numRows - 1) {
            x++;
        } else if (acol && x === numRows - 1) {
            x = numRows - 2;
            acol = false;
        } else if (!acol && x !== 0) {
            x--;
        } else if (!acol && x === 0) {
            acol = true;
            x++;
        }
    }
    let r = '';
    arr.forEach(v => {
        r += v.join('');
    });
    return r;
};

console.log(convert('PAYPALISHIRING', 3));
// console.log(convert('PAYPALISHIRING', 4));

