const names = prompt("이름 리스트를 입력하세요. (공백으로 구분합니다.)").split(" ");
const scores = prompt("수학 점수 리스트를 입력하세요. (공백으로 구분합니다.)").split(" ");
const obj = {}; // 매칭해서 넣을 객체

for(let i=0; i<names.length(); i++) {
    obj[names[i]] = parseInt(scores[i]);
}

console.log(obj);