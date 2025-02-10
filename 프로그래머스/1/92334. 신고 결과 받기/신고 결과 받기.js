function solution(id_list, report, k) {
    const reportObj = {};
    
    // 신고 테이블 초기화
    for (const u of id_list) {
        reportObj[u] = [];
    }
    
    // 신고테이블에 신고받은 유저(key) - 신고자(value) 형식으로 저장
    report.forEach(rep => {
        const [reporter, reported] = rep.split(" ");
        if (!reportObj[reported].includes(reporter)) {
            reportObj[reported].push(reporter);
        }
    });
    
    // 신고테이블의 각 값이 K번 이상인 경우 추출해서 이용정지 유저 찾기
    suspendedUid = Object.keys(reportObj).filter((key) => {
        return reportObj[key].length >= k;
    });
    
    
    // 이용정지 당한 유저를 신고한 유저를 찾아 카운팅처리
    const countObj = {};
    id_list.forEach((uid) => {
        countObj[uid] = 0;
    });
    
    
    suspendedUid.forEach((uid) => {
        reportObj[uid].forEach((reporter) => {
            countObj[reporter]++; 
        })
    })
    
    // id_list의 순서에 따라 결과 배열 생성
    const answer = id_list.map(user => countObj[user]);
    
    return answer;
}