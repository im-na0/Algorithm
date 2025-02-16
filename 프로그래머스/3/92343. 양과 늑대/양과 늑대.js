class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(data) {
        const node = new Node(data);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.size++;
    }
    
    pop() {
        if (!this.head) {
            return null;
        }
        
        const removeNode = this.head;
        this.head = this.head.next;
        
        if (!this.head) {
            this.tail = null;
        }
        
        this.size--;
        
        return removeNode.data;
    }
    
    isEmpty() {
        return this.size === 0;
    }
}

function buildTree(info, edges) {
    const tree = Array.from({ length: info.length }, () => []);
    for (const [from, to] of edges) {
        tree[from].push(to);
    }
    return tree;
}

function solution(info, edges) {
    const tree = buildTree(info, edges);
    let maxSheep = 0;
    
    const q = new Queue();
    q.push([0, 1, 0, new Set()]); // 현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합
    
    while (!q.isEmpty()) {
        const [curr, sheepCount, wolfCount, visited] = q.pop();
        // 최대 양의 수 업데이트
        maxSheep = Math.max(maxSheep, sheepCount);
        // 현재 방문한 노드의 이웃 노드를 visited에 추가
        for (const next of tree[curr]) {
            visited.add(next);
        }
        // 인접한 노드들에 대해 탐색
        for (const next of visited) {
            if (info[next]) {
                // 늑대가 양보다 1마리 더 많은지 확인
                if (sheepCount !== wolfCount + 1) {
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newVisited]);
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newVisited])
            }
        }
    }
    
    return maxSheep;
}