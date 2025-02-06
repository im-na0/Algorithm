class Queue {
    constructor(array = []) { 
        this.items = array;
        this.front = 0;
        this.rear = array.length;
        this.size = array.length;
    }
    
    push(item) {
        this.items.push(item);
        this.rear++;
        this.size++;
    }
    
    pop() {
        this.size--;
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let current_weight = 0;
    
    truck_weights = new Queue(truck_weights);
    const bridge = new Queue(); // 다리 위 트럭 큐 (무게, 경과 시간)
    
    while (!truck_weights.isEmpty() || bridge.size > 0) {
        answer++; // 1초 증가

        // 다리 위 트럭이 시간 초과로 나갈 수 있는지 체크
        if (!bridge.isEmpty() && bridge.items[bridge.front][1] >= bridge_length) {
            current_weight -= bridge.pop()[0]; // 트럭 무게 제거
        }

        // 대기 트럭이 다리 위로 올라갈 수 있는지 체크
        if (!truck_weights.isEmpty() && current_weight + truck_weights.items[truck_weights.front] <= weight && bridge.size < bridge_length) {
            let truck = truck_weights.pop();
            bridge.push([truck, 0]); // 다리 위에 트럭 추가
            current_weight += truck; // 다리 위 총 무게 업데이트
        }

        // 다리 위 트럭들의 경과 시간 증가
        for (let i = bridge.front; i < bridge.rear; i++) {
            bridge.items[i][1]++;
        }
    }

    return answer;
}
