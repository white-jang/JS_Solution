let numbers = prompt("10개의 숫자를 입력하세요. (공백 구분)").split(' ').map(Number);
console.log(Math.max.apply(null, numbers));