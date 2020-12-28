import Queue from './datastructures/queue';

const graph = (heigth, width) => {
  let graph = {};
  let visited = [];
  let queue = Queue();
  for (let row = 0; row < heigth; row++) {
    // graph[row] = {};
    for (let col = 0; col < width; col++) {
      graph[`${row} ${col}`] = [
        { row: row, col: col - 1 },
        { row: row, col: col + 1 },
        { row: row - 1, col: col },
        { row: row + 1, col: col },
      ]
        .filter(
          (item) =>
            item.row >= 0 &&
            item.row <= heigth - 1 &&
            item.col >= 0 &&
            item.col <= width - 1
        )
        .map((item) => `${item["row"]} ${item["col"]}`);
    }
  }
  const bfs = (start) => {
    
    visited.push(start);
    queue.enqueue(start);

    for(let node in graph){
     
      // console.log(g);
      while (!queue.isEmpty()) {
        let s = queue.dequeue();
        
  
        graph[s].forEach((neighbour) => {
          if (!visited.includes(neighbour)) {
            console.log(neighbour);
            visited.push(neighbour);
            queue.enqueue(neighbour);
          }
        });
      }
    }
    console.table(visited)
    
  };
  return {
    bfs,
  };
};
export default graph;

// const Graph = () => {
//   let graph = {};

//   const addEdge = (u, v) => {
//     graph[u].push(v);
//   };
//   const BFS = (s) => {
//     let visited = Array(Math.max(graph) + 1).fill(false);
//     let queue = Queue();
//     queue.enqueue(s);
//     visited[s] = True;

//     while (!queue.isEmpty()) {
//       s = queue.shift();
//       graph[s].forEach((element) => {
//         if (visited[element] == false) {
//           queue.enqueue(element);
//           visited[i] = true;
//         }
//       });
//     }
//   };
// };

// class Graph:

//     # Constructor
//     def __init__(self):

//         # default dictionary to store graph
//         self.graph = defaultdict(list)

//     # function to add an edge to graph
//     def addEdge(self,u,v):
//         self.graph[u].append(v)

//     # Function to print a BFS of graph
//     def BFS(self, s):

//         # Mark all the vertices as not visited
//         visited = [False] * (max(self.graph) + 1)

//         # Create a queue for BFS
//         queue = []

//         # Mark the source node as
//         # visited and enqueue it
//         queue.append(s)
//         visited[s] = True

//         while queue:

//             # Dequeue a vertex from
//             # queue and print it
//             s = queue.pop(0)
//             print (s, end = " ")

//             # Get all adjacent vertices of the
//             # dequeued vertex s. If a adjacent
//             # has not been visited, then mark it
//             # visited and enqueue it
//             for i in self.graph[s]:
//                 if visited[i] == False:
//                     queue.append(i)
//                     visited[i] = True
