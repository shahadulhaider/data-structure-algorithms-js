const dfsRecursive = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const visited = {};

  for (let i = 0; i < vertices.length; i++) {
    if (!visited[vertices[i]]) {
      dfsVisit(vertices[i], visited, adjList, callback);
    }
  }
};

const dfsVisit = (u, visited, adjList, callback) => {
  visited[u] = true;

  if (callback) {
    callback(u);
  }

  const neighbours = adjList.get(u);

  for (let i = 0; i < neighbours.length; i++) {
    const w = neighbours[i];

    if (!visited[w]) {
      visited[w] = true;
      dfsVisit(w, visited, adjList, callback);
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

// recursive dfs traversal steps
// ['A']
// ['A', 'B']
// ['A', 'B', 'E']
// ['A', 'B', 'E', 'I']
// ['A', 'B', 'E', 'I', 'H']
// ['A', 'B', 'E', 'I', 'H', 'D']
// ['A', 'B', 'E', 'I', 'H', 'D', 'C']
// ['A', 'B', 'E', 'I', 'H', 'D', 'C', 'G']
// ['A', 'B', 'E', 'I', 'H', 'D', 'C', 'G', 'F']

const printVertex = value => console.log('Visited vertex: ' + value);

dfsRecursive(graph, printVertex);