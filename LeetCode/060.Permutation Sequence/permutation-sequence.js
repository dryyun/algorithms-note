/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let arr = [];
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] * i;
    }
    console.log(arr); // 24
    // console.log(9 / (all / n)); // 9 / 6 = 1.5

    //1,2,3,4
    //2 ,1,3,4
    // k = 3
    // all = 6 , 3/(6/3) = 1.5 // 23, 14


};


// console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));