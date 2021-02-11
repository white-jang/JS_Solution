let heights = prompt("키들을 입력하세요. (공백 구분)");
let sorted_heights = "";
// 그냥 sort를 이용하면 넘버값이 문자열 취급되기 때문에 sort가 제대로 이루어지지 않음

sorted_heights = heights.split(" ").sort(function (a, b) {
    // a, b 매개변수로서 값들을 자동으로 반복하여 비교
    return a - b;
    // return 값이 a-b이므로 음수면 값이 크다 = 오름차순
    // b-a이면 내림차순 정렬됨
}).join(" ");

if (heights === sorted_heights)
    console.log("YES");
else
    console.log("NO");