const str = prompt("문자열을 입력하세요.");

for (let i = 0; i < str.length; i++) {
    if (i != str.length - 1)
        console.log(str[i], str[i + 1]);
}

// for (let i=0; i<data.length-1; i++){
//     console.log(data[i], data[i+1]);
//   }