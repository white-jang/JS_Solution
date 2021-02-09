function circle(n) {
    const circle = n * n * 3.14;
    return circle;
}

let radius = prompt("반지름을 입력하세요.");
console.log(circle(radius));