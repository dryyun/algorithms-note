/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let len = s.length;
    if (0 === len || 1 === len) {
        return len;
    }

    // let arr = [];
    // for (let i = 1; i <= 26; i++) {
    //     arr[i] = String.fromCharCode(64 + i);
    // }
    if (2 === len) {
        if (Number(s) > 26) {
            return 2;
        }
        return 3;
    }


    let dfs = function () {

    };
    dfs();


};

// console.log(numDecodings('2'));
// console.log(numDecodings('12'));
// console.log(numDecodings('27'));

console.log(numDecodings('226'));
