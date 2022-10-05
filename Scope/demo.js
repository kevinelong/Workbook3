
let score = 0; //GLOBAL VARIABLE

function add(){
    score += 7; // CHANGING/MUTATING THE GLOBAL
}

function showScore(){
    let score = 123 ; // HIDES THE OUTER
    console.log("INNER SCORE: " + score); // ACCESS THE VARIABLE
}

//TEST
showScore() // will show zero
add() //add 7
add() //add 7
showScore() // will now show ?
console.log("OUTER SCORE: " + score);