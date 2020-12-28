import Queue from '../datastructures/queue';

const dijkstra = (start, graph, goal) => {
  let frontier = Queue();
  frontier.enqueue(start);
  let set = new Set();
  set.add(start);

  while (!frontier.isEmpty()) {
    let v = frontier.dequeue();
    if (v == goal) return v;
    // for(edge = v; v<)
  }
};
