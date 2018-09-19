/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let len = nums.length;
    if (0 === len) {
        return false;
    }
    if (1 === len) {
        return nums[0].toString();
    }
    nums.sort((a, b) => {
        let as = a.toString();
        let bs = b.toString();

        let len = Math.max(as.length, bs.length);

        let afirst = Number(as[0]);
        let bfirst = Number(bs[0]);
        let ac, bc;
        for (let i = 0; i < len; i++) {
            ac = (as[i] !== undefined ? Number(as[i]) : afirst);
            bc = (bs[i] !== undefined ? Number(bs[i]) : bfirst);

            if (ac !== bc) {
                return bc - ac;
            }
        }

        let apb = Number(as + bs);
        let bpa = Number(bs + as);

        return apb < bpa;

    });

    return nums[0] === 0 ? nums[0].toString() : nums.join('');

};

console.log(largestNumber([0, 0])); // 0
console.log(largestNumber([10, 2])); // 210
// console.log(largestNumber([30, 3, 34, 5, 9])); // 9534330 , 32，30，3
// console.log(largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247])); // 9609938824824769735703560743981399
// console.log(largestNumber([121, 12])); // 12121
// console.log(largestNumber([12, 121])); // 12121
// console.log(largestNumber([8308, 830])); // 8308830
// console.log(largestNumber([9051,5526,2264,5041,1630,5906,6787,8382,4662,4532,6804,4710,4542,2116,7219,8701,8308,957,8775,4822,396,8995,8597,2304,8902,830,8591,5828,9642,7100,3976,5565,5490,1613,5731,8052,8985,2623,6325,3723,5224,8274,4787,6310,3393,78,3288,7584,7440,5752,351,4555,7265,9959,3866,9854,2709,5817,7272,43,1014,7527,3946,4289,1272,5213,710,1603,2436,8823,5228,2581,771,3700,2109,5638,3402,3910,871,5441,6861,9556,1089,4088,2788,9632,6822,6145,5137,236,683,2869,9525,8161,8374,2439,6028,7813,6406,7519]));
