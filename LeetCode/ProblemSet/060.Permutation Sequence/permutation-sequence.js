/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let ns = [], arr = [];
    ns[1] = 1;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        ns[i] = ns[i - 1] * i;
        arr[i] = i;
    }
    if (1 === k) {
        return arr.join('');
    }
    if (ns[n] === k) {
        arr.reverse();
        return arr.join('');
    }

    let result = '';
    let i = 1;
    while (i < n) {
        let c = n - i + 1;
        let r = k / (ns[c] / c);

        let m = Math.ceil(r);

        result += arr[m + i - 1];
        arr.splice(m + i - 1, 1);

        if (r === m) {
            r -= 1;
        }
        k -= Math.floor(r) * (ns[c] / c);
        n--;
    }
    return result + arr[1];
};

console.log(getPermutation(1, 1));
console.log(getPermutation(2, 1));
console.log(getPermutation(2, 2));
console.log(getPermutation(3, 1));
console.log(getPermutation(3, 2));
console.log(getPermutation(3, 3));
console.log(getPermutation(3, 4));
console.log(getPermutation(3, 5));
console.log(getPermutation(3, 6));
console.log(getPermutation(4, 9));
console.log(getPermutation(4, 24));