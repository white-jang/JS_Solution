let nums = prompt("양의 정수를 입력하세요.").split("").map(Number);
let result = 0;

nums.forEach(n => {
    result += n;
});
console.log(result);