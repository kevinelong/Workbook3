
function calculate(a, b) { 
    return [a + b, a * b, a - b, a / b]; // pack multiple into a single array/list object
}

let result = calculate(6,7);
console.log(result); //dump all at once
console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])


function calculate2(a, b) { 
    return {"add":a + b, "mult": a * b, "sub": a - b, "div": a / b}; // pack multiple into a single array/list object
}

let result2 = calculate2(6,7);
console.log(result2);
console.log(result2.mult);

