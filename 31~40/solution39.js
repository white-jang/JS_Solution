let str = prompt("문자열을 입력하세요.");
console.log(str.replace(/q/gi, 'e'));

// 함수를 사용한 방법
// function replaceAll(str, searchStr, replaceStr) {
//     return str.split(searchStr).join(replaceStr);
//  }
 
//  console.log(replaceAll(word,"q","e"))