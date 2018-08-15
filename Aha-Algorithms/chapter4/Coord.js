/**
 * 定义坐标结构
 */
class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 下一步
     * @param x
     * @param y
     */
    next([x, y]) {
        this.x += x;
        this.y += y;
    }

    /**
     * 坐标是否有效
     * @param n  , n 行
     * @param m  , m 列
     * @returns {boolean}
     */
    isValid(n, m) {
        return this.x >= 0 && this.x < n && this.y >= 0 && this.y < m;
    }

    /**
     * 根据地图 map 获取坐标点的内容
     * @param map
     * @returns {*}
     */
    entity(map) {
        return map[this.x][this.y];
    }

    /**
     * 字符串表示
     * @returns {string}
     */
    toString() {
        return `${this.x} - ${this.y}`;
    }

    /**
     * 判断坐标作为是否相等
     * @param coordA
     * @param coordB
     * @returns {boolean}
     */
    static isEqual(coordA, coordB) {
        return coordA.toString() === coordB.toString();
    }

    /**
     *
     * @param coord
     * @returns {Coord}
     */
    static newCoord(coord) {
        return new Coord(coord.x, coord.y);
    }
}

module.exports = Coord;
