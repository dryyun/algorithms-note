"use strict";

const Deque = require("double-ended-queue");

var graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


function person_is_seller(name) {
    return name[name.length - 1] === 'm';
}

function search(name) {
    let deque = new Deque(graph[name]);
    let searched = new Set();
    while (!deque.isEmpty()) {
        let person = deque.shift();
        searched.add(person);
        if (person_is_seller(person)) {
            return person;
        }

        graph[person].forEach(v => {
            if (!searched.has(v)) {
                deque.push(v);
            }
        })
    }
    return null;
}

console.log(search('you'));

