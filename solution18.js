var scores_str = prompt("세 과목의 점수를 입력하세요.");
var scores = scores_str.split(" ").map(Number); // .map()을 이용해 Number 타입으로 매칭
var avg_score = Math.floor((scores[0]+scores[1]+scores[2]) / 3);
// Math.floor 메서드는 소수점 자리를 모두 버림
console.log(avg_score);