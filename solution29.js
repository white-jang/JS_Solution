const alphabet = prompt("알파벳을 입력하세요.")
let checkEngA = /[A-Z]/;

if (checkEngA.test(alphabet) == true)
    console.log("YES");
else
    console.log("NO");
