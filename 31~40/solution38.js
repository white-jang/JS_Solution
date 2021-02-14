let scores = prompt("점수들을 입력하세요. (공백으로 구분)").split(' ').map(Number);
let result = 0;
let arr = [];

scores.sort((a,b) => {
    return a-b;
});
// 내림차순 정렬

while (arr.length < 3) {
    let n = scores.pop();
    if (!(arr.includes(n)))
        arr.push(n);
    result++;
}

console.log(result);