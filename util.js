const _ = require('lodash');
const readline = require("readline");

class Util {
    /**
     * 生成随机 int 数组
     * @param min
     * @param max
     * @param size
     * @returns {Array}
     */
    static randomArray(min, max, size) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(_.random(min, max))
        }
        return arr;
    }

    /**
     * 生成 length 长度，每个元素都为 init 的数组
     * @param length
     * @param init
     */
    static fillArray(length, init = 0) {
        return new Array(length).fill(init);
    }

    /**
     * 读入行
     * @param question
     * @returns {*}
     */
    static readline(question = '') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let done = false;
        let data;
        rl.question(question, function cb(res) {
            data = res;
            done = true;
        });
        require('deasync').loopWhile(function () {
            return !done;
        });

        return data;
    }

    /**
     * 分割字符串
     * @param line
     * @returns {T[]}
     */
    static split(line) {
        let arr = line.split(' ');
        return arr.filter((data) => {
            return data.length > 0;
        })
    }

}

module.exports = Util;