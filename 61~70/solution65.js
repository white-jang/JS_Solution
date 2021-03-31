const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach((v, i) => {
    if (i % 2 === 0)
        c.push([v, b[i]]); 
    else
        c.push([b[i], v]);
});

console.log(c);