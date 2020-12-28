const Node = (nodeName, nodes = []) => {
  var adjancentNodes = nodes;
  const getNodes = () => adjancentNodes;
  return { getNodes };
};

export default Node;
