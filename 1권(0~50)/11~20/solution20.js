var numbers = prompt("a와 b를 입력하세요.").split(" ").map(Number);
var quotient = parseInt(numbers[0] / numbers[1]);
var remainder = numbers[0] % numbers[1];
console.log(quotient, remainder);