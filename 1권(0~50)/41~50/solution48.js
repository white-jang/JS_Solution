let str = prompt("문자열을 입력하세요.");
let result = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase())
        result.push(str[i].toLowerCase());
    else
        result.push(str[i].toUpperCase());
}

console.log(result.join(''));