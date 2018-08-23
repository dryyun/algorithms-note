"use strict";

const M = Number.MAX_SAFE_INTEGER;

var map = {
    'start': {
        'a': 6,
        'b': 2,
    },
    'a': {
        'fin': 1
    },
    'b': {
        'a': 3,
        'fin': 5
    },
    'fin': {}
};

var dis = {
    'a': 6,
    'b': 2,
    'fin': M
};
var parents = {
    'a': 'start',
    'b': 'start',
    'fin': null
};

var book = {
    'start': 1
};

for (let i = 1; i < 4; i++) { // 4 个节点
    let min = M;
    let node;

    Object.keys(dis).forEach(v => {
        if (!book[v] && dis[v] < min) {
            min = dis[v];
            node = v;
        }
    });

    if (node) {
        book[node] = 1;
        Object.keys(map[node]).forEach(v => {
            if (dis[v] > dis[node] + map[node][v]) {
                dis[v] = dis[node] + map[node][v];

                parents[v] = node;
            }
        })
    }
}

console.log(dis);
console.log(parents);