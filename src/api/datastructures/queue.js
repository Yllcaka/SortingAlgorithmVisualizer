const Queue = () => {
  let queue = [];
  const enqueue = (item) => {
    queue.push(item);
  };
  const dequeue = () => queue.shift();

  const isEmpty = () => queue.length === 0;
  const peek = () => (queue.isEmpty() ? queue[0] : undefined);
  const getQueue = () => queue;

  return {
    enqueue,
    dequeue,
    isEmpty,
    peek,
    getQueue,
  };
};

export default Queue;
