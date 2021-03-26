let str = "aaabbbbcdddd";
// 중복을 제거하기 위해 set으로 만들었는데
// set은 인덱스가 존재하지 않아 각 요소에 접근하기 어려워 다시 array로 변환
let alphabets = Array.from(new Set(str.split("")));
console.log(alphabets);
let result = "";

for (let i = 0; i < alphabets.length; i++) {
    let alphabet = alphabets[i];
    let pattern = new RegExp(alphabet, "g"); // 변수가 들어가는 정규표현식 만들기
    result += `${alphabet}${str.match(pattern).length}`;
}

console.log(result);

// 원래 정답
// const user_s = new String(prompt('문자열을 입력하세요'));
// let result_s = '';
// let store_s = user_s[0];
// let count = 0;

// for (let i of user_s){
//   if (i === store_s){
//     count += 1;
//   } else{
//     result_s += store_s + String(count);
//     store_s = i;
//     count = 1;
//   }
// }

// result_s += store_s + String(count);
// console.log(result_s);