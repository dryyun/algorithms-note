/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
const {LeetCode, Interval} = require('../../leetcode.js');
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    let len = intervals.length;
    if (!len) {
        return [];
    }
    intervals.sort((a, b) => a.start - b.start);
    let res = [];

    let start = intervals[0].start;
    let end = intervals[0].end;
    for (let i = 1; i < len; i++) {
        if (end >= intervals[i].start) {
            end = Math.max(intervals[i].end, end);
        } else {
            res.push(new Interval(start, end));
            start = intervals[i].start;
            end = intervals[i].end;
        }
    }
    res.push(new Interval(start, end));
    return res;

};

let isoverlap = function (a, b) {
    return a.end >= b.start && a.start <= b.end;
};

let mergeIntervals = function (a, b) {
    let start = Math.min(a.start, b.start);
    let end = Math.max(a.end, b.end);
    return new Interval(start, end);
};


console.log(LeetCode.intervalArrToArr(merge(LeetCode.twoArrToInterval([[15, 18], [1, 3], [2, 6], [8, 10],]))));
console.log(LeetCode.intervalArrToArr(merge(LeetCode.twoArrToInterval([[1, 4], [4, 5]]))));
console.log(LeetCode.intervalArrToArr(merge(LeetCode.twoArrToInterval([[1, 4], [2, 3]]))));
console.log(LeetCode.intervalArrToArr(merge(LeetCode.twoArrToInterval([]))));