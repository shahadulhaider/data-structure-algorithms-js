// using breadth first search to find shortest path
const bfs = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const queue = [];
  const visited = {};
  const distances = {};
  const predecessors = {};

  for (let i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  queue.push(startVertex);

  while (queue.length !== 0) {
    const u = queue.shift();
    visited[u] = true;

    const neighbours = adjList.get(u);
    for (let i = 0; i < neighbours.length; i++) {
      const w = neighbours[i];

      if (!visited[w]) {
        visited[w] = true;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.push(w);
      }
    }
  }

  return {
    distances,
    predecessors
  };
};

// test
const Graph = require('./Graph');

const graph = new Graph();

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('E', 'I');
graph.addEdge('E', 'G');
graph.addEdge('F', 'H');
graph.addEdge('F', 'G');
graph.addEdge('G', 'B');
graph.addEdge('H', 'G');
graph.addEdge('H', 'E');
graph.addEdge('H', 'I');

console.log(graph.toString());
const shortestPathFrom = vertex => bfs(graph, vertex);
console.log(shortestPathFrom('B'));