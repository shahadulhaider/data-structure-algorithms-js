const depthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const stack = [];
  const visited = {};

  for (let i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }

  stack.push(startVertex);

  while (stack.length !== 0) {
    const u = stack.pop();
    visited[u] = true;

    const neighbours = adjList.get(u);
    for (let i = 0; i < neighbours.length; i++) {
      const w = neighbours[i];

      if (!visited[w]) {
        visited[w] = true;
        stack.push(w);
      }
    }

    if (callback) {
      callback(u);
    }
  }
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
graph.addEdge('D', 'I');

/*
A => B C D
B => A E F G
C => A D G
D => A C G H I
E => B I G H
F => B H G
G => C D E F B H
H => D F G E I
I => E H D
*/

// iterative dfs traversal steps
// ['A']
// ['A', 'D']
// ['A', 'D', 'I']
// ['A', 'D', 'I', 'E']
// ['A', 'D', 'I', 'E', 'H']
// ['A', 'D', 'I', 'E', 'H', 'F']
// ['A', 'D', 'I', 'E', 'H', 'F', 'G']
// ['A', 'D', 'I', 'E', 'H', 'F', 'G', 'C']
// ['A', 'D', 'I', 'E', 'H', 'F', 'G', 'C', 'B']

const printVertex = value => console.log('Visited vertex: ' + value);

depthFirstSearch(graph, 'A', printVertex);