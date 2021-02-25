let str = prompt("문자열을 입력하세요.");
console.log(str.replace(/q/gi, 'e'));
//* g : 발생할 모든 pattern에 대한 전역 검색
// * i : 대/소문자 구분 안함
// * m: 여러 줄 검색 (참고)

// 함수를 사용한 방법
// function replaceAll(str, searchStr, replaceStr) {
//     return str.split(searchStr).join(replaceStr);
//  }
 
//  console.log(replaceAll(word,"q","e"))