function mathBrackets(arr) {
    let bracket = [];
    for (let idx in arr) {
        if (arr[idx] === '(') {
            bracket.push('(');
        } else if (arr[idx] === ')') {
            if (bracket.length === 0)
                return false;
            bracket.pop();
        }
    }
    return true;
}

const brackets = prompt("소괄호들을 입력하세요.").split('');

if (mathBrackets(brackets) === true)
    console.log("YES");
else
    console.log("NO");