// let count = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i.toString().includes('1') === true) {
//         count++;
//     }
//     console.log(i, count);
// }
// 숫자를 문자열로 변환해서 1이 포함되어있는지 검사
// 101, 1001처럼 1이 두 개일 경우 계산이 안 되는 오류

let s = '';
for (let i = 0; i <= 1000; i++) {
    s += i; // 0~1000까지 다 문자열로 만들기
}
console.log(s);
console.log(s.match(/1/g).length);