/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let result = [];
    let tmp = [];
    let dfs = function (step, index, str) {
        if (4 === step) {
            let last = str.substr(index);
            if (last === '' || (last.length > 1 && last[0] === '0')) {
                return;
            }
            if (Number(last) <= 255) {
                result.push(tmp.concat([last]).join('.'));
            }
            return;
        }
        for (let i = 1; i <= 3; i++) {
            let ipSome = str.substr(index, i);
            if (ipSome.length > 1 && ipSome[0] === '0') {
                continue;
            }
            if (Number(ipSome) <= 255) {
                tmp.push(ipSome);
                dfs(step + 1, index + i, str);
                tmp.pop();
            }
        }
    };

    dfs(1, 0, s);
    return result;
};

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('010010'));