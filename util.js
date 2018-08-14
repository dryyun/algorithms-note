const _ = require('lodash');

class Util {
    /**
     * 生成随机 int 数组
     * @param min
     * @param max
     * @param size
     * @returns {Array}
     */
    static rangArray(min, max, size) {
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

}

module.exports = Util;