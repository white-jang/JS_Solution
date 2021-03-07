// 가까운값 : 차이값의 절대값의 최소값일 때의 데이터
let nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
};

let koreaWidth = nationWidth["korea"];
delete nationWidth["korea"];

let resultStr = "";
let abs, resultNum = 0;
let min = nationWidth["Rusia"];

for (let property in nationWidth) {
    // 절대값 구하기
    abs = Math.abs(nationWidth[property] - koreaWidth);

    if (abs < min) {
        min = abs;
        resultStr = property;
        resultNum = nationWidth[property];
    }
}

console.log(resultStr, resultNum - koreaWidth);