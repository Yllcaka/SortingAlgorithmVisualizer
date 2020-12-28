import Queue from './datastructures/queue';

const graph = (heigth, width) => {
  let graph = {};
  let visited = [];
  let queue = Queue();
  const getGraph = () => Object.entries( graph).map(item => {
  
    let key = item[0];
    let value = item[1];
    return {[key]:value,};
  })
  // const getGraph = () => graph;
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
        // .map((item) => `${item["row"]} ${item["col"]}`);
        .map((item) => `${item["row"]} ${item["col"]}`);
    }
  }
  const bfs = (start) => {
    
    visited.push(start);
    queue.enqueue(start);

    for(let node in graph){

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
    getGraph,
    bfs,
  };
};
export default graph;

