// usage
const Graph = require('./Graph');

const graph = new Graph();

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'E');
graph.addEdge('A', 'H');
graph.addEdge('B', 'H');
graph.addEdge('B', 'D');
graph.addEdge('C', 'B');
graph.addEdge('C', 'F');
graph.addEdge('C', 'G');
graph.addEdge('D', 'E');
graph.addEdge('D', 'I');
graph.addEdge('E', 'C');
graph.addEdge('E', 'G');
graph.addEdge('F', 'H');
graph.addEdge('F', 'G');
graph.addEdge('G', 'B');
graph.addEdge('H', 'G');
graph.addEdge('H', 'E');
graph.addEdge('H', 'I');
graph.addEdge('D', 'I');

console.log(graph.toString());
// console.log(graph.getVertices());
// console.log(graph.getAdjList());
