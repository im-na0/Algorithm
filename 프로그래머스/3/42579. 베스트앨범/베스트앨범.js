// 가장 많이 재생된 장르 구하기
// 각 장르별로 많이 듣는 순으로 순서 정해서 2곡 뽑기 *재생횟수가 동일하면 고유번호 오름차순으로
// 1,2 순서지켜서 고유번호 담기

function solution(genres, plays) {
    const genreObj = {};
    const playObj = {};
    
    for (let i = 0; i < genres.length; i++) {
        genre = genres[i];
        play = plays[i];
        
        if (!(genre in genreObj)) {
            genreObj[genre] = [];
            playObj[genre] = 0;
        }
        
        genreObj[genre].push([i, play]);
        playObj[genre] += play;
    }
    
    mostPlayGenres = Object.keys(playObj).sort((a, b) => playObj[b] - playObj[a]);

    let answer = [];
    for (const g of mostPlayGenres) {
        mostPlaySong = genreObj[g].sort((a, b) => a[1] === b[1] ? a[1] - b[1] : b[1] - a[1]);
        
        answer.push(...mostPlaySong.slice(0, 2).map((song) => song[0]));
    }
    return answer;
    
}