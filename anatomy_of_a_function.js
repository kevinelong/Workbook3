// A function is like a recipe.
// Defining it is separate from doing it.
// To do it you must call it by name one or more times,
// after defining it.
// it can have be defined to receive one or more input parameters (also known as arguments), return zero or more

function do_it(name, phrase){ // Define the function and its parameters/arguments like a let with no value
    return phrase + name; //Sending back a result - not printing/logging
}

do_it("Ayomide", "Everything is awesome! "); // Dropping the result on the floor to be ignored

let result = do_it("Ayomide", "Everything is awesome! "); //pass two separate arguments/values - capture into result
console.log(result);

const dew = "Do the dew! ";
console.log(do_it("Kevin", dew)) // Call the function by name, and pass in argument values
console.log(do_it("Nina", dew))  // immediately print

let x = do_it("Bob", dew) //Capture in a variable - best if you want to do use it more than once
console.log(x) // Then print
console.log(x) // Then print again