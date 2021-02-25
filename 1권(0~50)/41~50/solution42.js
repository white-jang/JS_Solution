const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = prompt("월을 입력하세요.");
const date = prompt("일을 입력하세요.");

function solution(a, b) {
    const theDay = new Date(`2020-${a}-${b}`); // Date 객체 생성 
    return days[theDay.getDay()]; 
    // .getDay() : 요일 정보를 숫자로 반환 0:일요일, 1:월요일...
}

console.log(solution(month, date));