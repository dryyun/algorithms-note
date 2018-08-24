/**
 * 集合覆盖问题
 */
"use strict";

const util = require('../../util.js');

let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

let stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

let final_stations = new Set();

while (states_needed.size) {
    let sta;
    let max_coverd_size = 0;
    Object.keys(stations).forEach(s => {
        if (!final_stations.has(s)) {
            let size = util.setOperate('intersect', stations[s], states_needed).size;
            if (size > max_coverd_size) {
                max_coverd_size = size;
                sta = s;
            }
        }
    });

    if (sta) {
        final_stations.add(sta);
        states_needed = util.setOperate('diff', states_needed, stations[sta]);
    }
}

console.log(final_stations);
