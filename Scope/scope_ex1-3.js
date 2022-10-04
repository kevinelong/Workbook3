// EXERCISE 1 - PAGE 33 - SECTION 1-29 - WORKBOOK 3
"use strict";
function test1() {
    let a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log("a = " + a);
}
test1();

//EXERCISE 2
"use strict";
function test2A() {
    if (1 == 1) {
        var a = 5;
    }
    console.log("a = " + a);
}
test2A();

// EXERCISE 2b
// "use strict";
// function test2B() {
//     if (1 == 1) {
//         let a = 5;
//     }
//     console.log("a = " + a);
// }
// test2B();

// EXERCISE 3
"use strict";
let a = 4;
function test3() {
    a = 3;
    console.log("a = " + a);
}
test3();
console.log("a = " + a);
