let n = prompt('정량을 입력하세요');
let count = 0;

while (true) {
    if (n % 7 == 0) {
        count += parseInt(n/7, 10);
        console.log(count);
        break;
    }
    // 3으로 나누지 않고... 3을 빼가면서 나머지가 7로 나눠지는지를 확인
    // 그러므로 3을 빼면서 대신 count++
    n -= 3;
    count++;
    // 7, 3으로도 안 떨어질 때
    if (n < 0) {
        console.log("-1");
        break;
    }
}

console.log(count);