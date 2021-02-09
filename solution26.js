// let str = prompt("한글로 행성 이름을 입력하세요.");

// switch (str) {
//     case "수성":
//         console.log("Mercury");
//     case "금성":
//         console.log("Venus");
//     case "지구":
//         console.log("Earth");
//     case "화성":
//         console.log("Mars");
//     case "목성":
//         console.log("Jupiter");
//     case "토성":
//         console.log("Saturn");
//     case "천왕성":
//         console.log("Uranus");
//     case "해왕성":
//         console.log("Neptune");
// }

const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);