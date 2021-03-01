function consecutive(arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1])
            return "NO";
    }
    return "YES";
}

const numbers = prompt("숫자들을 입력하세요. (공백 구분)").split(" ").map(Number);
console.log(consecutive(numbers));