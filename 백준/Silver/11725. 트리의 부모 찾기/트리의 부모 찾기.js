const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function buildGraph(data) {
  const graph = Array.from({ length: +n + 1 }, () => []);

  for (const el of data) {
    const [to, from] = el.split(" ").map(Number);
    graph[to].push(from);
    graph[from].push(to);
  }

  return graph;
}

function solution(n, input) {
  const graph = buildGraph(input);
  const parents = Array(+n + 1).fill(0);
  const visited = Array(+n + 1).fill(false);
  const q = [1];

  visited[1] = true;

  while (q.length > 0) {
    const node = q.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        parents[next] = node;
        q.push(next);
      }
    }
  }

  return parents.slice(2).join("\n");
}

console.log(solution(n, input));
