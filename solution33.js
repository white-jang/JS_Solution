let numbers = prompt("숫자 리스트를 입력하세요. (공백 구분)").split(' ').reverse();
let result = " ";

for (let i = 0; i<numbers.length; i++) {
    result += (numbers[i] + " ");
}

console.log(result);