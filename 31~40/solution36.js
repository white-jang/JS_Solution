const num = prompt("1~9 사이의 숫자를 입력하세요.");
let str = "";
for (let i = 1; i < 10; i++) {
    str += ((i*num)+' ');
}
console.log(str);