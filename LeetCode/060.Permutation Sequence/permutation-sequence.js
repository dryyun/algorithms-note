/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let ns = [], arr = [];
    for (let i = 1; i <= n; i++) {
        i > 1 ? ns[i] = ns[i - 1] * i : ns[i] = i;
        arr[i] = i;
    }
    let nall = ns[n];
    let ndan = nall / n;
    console.log(ndan);

    let r = Math.ceil(k / (ns[n] / n));
    [arr[1], arr[r]] = [arr[r], arr[1]];
    console.log(r);

    console.log(ns);
    console.log(arr); // 24
    // console.log(9 / (all / n)); // 9 / 6 = 1.5

    //1,2,3,4
    //2 ,1,3,4
    // k = 3
    // all = 6 , 3/(6/3) = 1.5 // 23, 14


};


// console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));