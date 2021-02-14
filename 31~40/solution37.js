const array = prompt("이름들을 입력해주세요.").split(' ');
let result = {};
let winner = "";

for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
    // undefined이면 처음 들어간 객체의 키값이므로 value를 1로
    // undefinde이 아니면 value+1로
}
// 배열을 객체로 가공, 이름 : 얻은 표 값으로 처리

winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b
    // .reduce()의 속성대로 중첩(누산)되어 실행
    // result[a] > result[b] == false면 a=b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);