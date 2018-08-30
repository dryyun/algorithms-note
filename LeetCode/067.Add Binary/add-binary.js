/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = a.split('');
    b = b.split('');
    let alen = a.length;
    let blen = b.length;
    let clen = alen - blen;
    if (clen < 0) {
        clen = -clen;
        [alen, blen] = [blen, alen];
        [a, b] = [b, a];
    }

    let carry = 0; // 进位
    for (let i = alen - 1; i >= 0; i--) {
        let bindex = i - clen;
        let t = Number(a[i]) + Number(b[bindex] === undefined ? 0 : b[bindex]) + carry;

        if (t >= 2) {
            a[i] = t % 2; // 取余
            carry = 1;
        } else {
            a[i] = t;
            carry = 0;
        }
    }
    if (1 === carry) {
        a.unshift(1);
    }
    return a.join('');
};


console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));

let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b));
