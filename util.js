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
     * 生成二维数组
     * @param rows
     * @param cols
     * @param init
     * @returns {Array}
     */
    static fillTwoArray(rows, cols, init = 0) {
        let arr = Util.fillArray(rows, init);
        for (let i = 0; i < rows; i++) {
            arr[i] = Util.fillArray(cols, init);
        }
        return arr;
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
            rl.close();
        });
        require('deasync').loopWhile(function () {
            return !done;
        });

        return data;
    }

    /**
     * 分割字符串
     * @param line
     * @param to
     * @returns {T[]}
     */
    static split(line, to = 'integer') {
        let arr = line.split(' ');
        arr = arr.filter((data) => {
            return data.length > 0;
        });
        if ('integer' === to) {
            arr = arr.map(x => _.toInteger(x));
        }
        return arr;
    }

    /**
     * 集合的 并、交、差集操作
     * @param op string union、intersect、diff
     * @param setA
     * @param setB
     * @param setOthers
     */
    static setOperate(op, setA, setB, ...setOthers) {
        let params = [];
        params.push([...setA]);
        params.push([...setB]);
        setOthers.forEach(s => {
            params.push([...s]);
        });
        if ('union' === op) { // 并集
            return new Set(_.union(...params));
        }
        if ('intersect' === op) { // 交集，返回一个集合，包含了所有在 a 中也同时出现在所有其它集合中的值
            return new Set(_.intersection(...params));
        }
        if ('diff' === op) { // 差集，返回一个集合，包含在 a 但不包含在其他集合中的值
            return new Set(_.difference(...params));
        }
        return null;
    }

}

module.exports = Util;