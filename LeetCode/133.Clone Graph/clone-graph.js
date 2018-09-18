/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
const {UndirectedGraphNode} = require('../../leetcode.js');
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
    if (!graph) {
        return graph;
    }
    let cloned = {};
    let queue = [];
    queue.push(graph);
    cloned[graph.label] = new UndirectedGraphNode(graph.label);
    while (queue.length) {
        let current = queue.shift();
        let newNode = cloned[current.label];
        for (let i = 0, len = current.neighbors.length; i < len; i++) {
            let neighbor = current.neighbors[i];
            if (neighbor.label !== current.label) {
                if (!cloned[neighbor.label]) {
                    cloned[neighbor.label] = new UndirectedGraphNode(neighbor.label);
                    queue.push(neighbor);
                }
                newNode.neighbors.push(cloned[neighbor.label]);
            } else {
                newNode.neighbors.push(newNode);
            }
        }
    }

    return cloned[graph.label];
};


