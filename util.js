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
}

module.exports = Util;