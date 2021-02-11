const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = ''; // 트리 초기화
  for(let j=1; j<=n-i; j++){
    star += ' ';    // 왼쪽 정렬용 공백
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';    // 트리
  }
  tree += star + '\n';
}

console.log(tree);