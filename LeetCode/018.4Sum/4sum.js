/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);

    let len = nums.length;
    let cache = {};
    for (let i = 0; i < len; i++) {
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let s = nums[i] + nums[j];
            let cell = [
                [i, j],
                [nums[i], nums[j]]
            ];
            // console.log(cell);
            if (cache[s]) {
                cache[s].push(cell);
            } else {
                cache[s] = [cell];
            }
        }
    }

    let result = [];
    let has = {};
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let t = target - nums[i] - nums[j];

            if (cache[t]) {
                cache[t].forEach(v => {
                    let ind = v[0];
                    // let nu = v[1];
                    if (ind.toString() !== [i, j].toString()
                        && ind[0] !== i && ind[0] !== j && ind[1] !== i && ind[1] !== j) {
                        let r = [nums[ind[0]], nums[ind[1]], nums[i], nums[j]];
                        let k = r.sort().toString();
                        if (!has[k]) {
                            has[k] = 1;
                            result.push(r);
                        }
                    }

                })
            }
        }
    }

    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
