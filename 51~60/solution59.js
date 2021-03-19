const str = "hi";
const num = 25 + (str.length / 2);

// 왼쪽 채우기
const left = str.padStart(num, "=");

// 오른쪽 채우기
const right = left.padEnd(50, "=");
console.log(right);