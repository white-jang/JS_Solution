let str = "복잡한 세상 편하게 살자";
let result = str[0];

for (let i = 1; i < str.length; i++) {
    if (str[i] === " ")
        result += str[i + 1];
}

console.log(result);

// const user_input = prompt('문자열을 입력하세요').split(' ');
// let result = '';

// for (let s of user_input){
//   result += s.slice(0, 1);
// }

// console.log(result);