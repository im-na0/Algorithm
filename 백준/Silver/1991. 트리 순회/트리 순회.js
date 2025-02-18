const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nodes = input.map((v) => v.split(" "));

const tree = {};
for (let i = 0; i < n; i++) {
  const [node, left, right] = nodes[i];
  tree[node] = [left, right];
}

function VLR(node) {
  if (node === ".") return "";
  const [left, right] = tree[node];
  let result = node;
  result += VLR(left) + VLR(right);
  return result;
}

function LVR(node) {
  if (node === ".") return "";
  const [left, right] = tree[node];
  let result = LVR(left);
  result += node;
  result += LVR(right);
  return result;
}

function LRV(node) {
  if (node === ".") return "";
  const [left, right] = tree[node];
  let result = LRV(left);
  result += LRV(right);
  result += node;
  return result;
}

console.log(VLR("A"));
console.log(LVR("A"));
console.log(LRV("A"));
