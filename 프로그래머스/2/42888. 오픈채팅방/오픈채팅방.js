// 해시테이블을 유저아아디(key) - 닉네임(value)로 저장함
// 닉네임이 변경되는 경우 ("Enter", "Change") 유저아이디를 기준으로 해시테이블의 값을 변경함

function solution(record) {
    const uidObj = {};
    
    for (const line of record) {
        const [action, uid, nickname] = line.split(" ");
        
        if (action !== "Leave") {
            uidObj[uid] = nickname
        }
    };
    
    let answer = [];
    
    for (const r of record) {
        const [action, uid, nickname] = r.split(" ");
        
        if (action === "Enter") {
            answer.push(uidObj[uid] + "님이 들어왔습니다.");
        } else if (action === "Leave") {
            answer.push(uidObj[uid] + "님이 나갔습니다.");
        }
    };
    
    return answer;
}