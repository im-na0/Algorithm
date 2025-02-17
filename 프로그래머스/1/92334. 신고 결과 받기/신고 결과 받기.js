// 신고 테이블 생성 (신고당한 uid - 신고한 uid)
// 테이블에서 값이 k번 이상인 이용정지 유저 찾기 
// 이용정지 유저로 신고한 유저 찾아서 카운팅 처리

function solution(id_list, report, k) {
    const reportObj = {};
    
    for (const u of id_list) {
        reportObj[u] = []; 
    }
    
    for (let i = 0; i < report.length; i++) {
        const [reporter, reported] = report[i].split(" ");
        if (!reportObj[reported].includes(reporter)) {
            reportObj[reported].push(reporter);
        }
    }
    
    // 신고 횟수가 k번 이상인 유저 찾기
    const badUser = Object.keys(reportObj).filter((key) => {
        return reportObj[key].length >= k;
    })
    
    const countObj = {};
    for (const u of id_list) {
        countObj[u] = 0;
    }
    
    badUser.forEach((uid) => {
        reportObj[uid].forEach((reporter) => {
            countObj[reporter]++;
        })
    })
    
    return id_list.map((uid) => countObj[uid]);
}