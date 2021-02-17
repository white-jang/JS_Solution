let decimal = parseInt(prompt("10진수를 입력하세요."), 10);
// console.log(decimal.toString(2));

let arrBinary = [];

while (decimal) {
    arrBinary.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
}

console.log(arrBinary.reverse().join(''));