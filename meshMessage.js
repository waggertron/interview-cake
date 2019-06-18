const graph = {
  weylin: new Set(['paul', 'sal', 'john', 'maysam', 'mark', 'boris']),
  sal: new Set(['eric', 'john', 'paul']),
  eric: new Set(['manny', 'nathan', 'jay']),
  john: new Set(['sal', 'mark', 'weylin']),
  manny: new Set(['maysam', 'eric', 'rahul', 'boris']),
  nathan: new Set(['eric', 'jay']),
  maysam: new Set(['manny', 'weylin', 'boris']),
  boris: new Set(['weylin', 'maysam']),
  mark: new Set(['weylin', 'john', 'sal']),
  paul: new Set(['rahul', 'weylin', 'sal']),
  rahul: new Set(['paul', 'manny', 'cody']),
  cody: new Set(['rahul']),
  shikey: new Set(['eric', 'maysam', 'jay', 'nathan']),
  jay: new Set(['shikey', 'nathan', 'eric']),

  // jay: new Set(),
};

const shortestPath = (graph, start, end) => {
  if (!graph || !start || !end) {
    throw Error('not enough arguments');
  }
  if (!graph[start] || !graph[end]) {
    throw Error('Non-inclusive graph');
  }
  if (start === end) {
    return 0;
  }
  const nodesLeft = [start];
  const paths = { [start]: start };
  while (nodesLeft.length) {
    const node = nodesLeft.shift();
    if (node === end) {
      // finish
      let curPos = end;
      const path = [];
      while (curPos !== start) {
        path.push(curPos);
        curPos = paths[curPos];
      }
      path.push(start);
      return path.reverse();
    }
    console.log({ node });
    for (const neighbor of graph[node] || []) {
      if (!paths.hasOwnProperty(neighbor)) {
        paths[neighbor] = node;
        nodesLeft.push(neighbor);
      }
    }
  }
};
console.log(shortestPath(graph, 'jay', 'cody'));
