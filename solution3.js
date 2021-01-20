// 자바스크립트 변수의 타입

console.log(typeof(12345));
console.log(typeof("abcde"));
console.log(typeof(true));

var myValue;
console.log(typeof(myValue)); // undefined
var myValue2 = null;
// 원시 타입 : number, string, boolean, undifined, null

console.log(typeof(myValue2)); // null이 아닌 object (초기 개발자의 실수) 

var arr = [100, 200, 300];
console.log(typeof(arr));
// 참조 타입 : object
// 원시 타입이 아닌 모든 타입은 참조 타입