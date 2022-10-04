const text = "Now is the time for all good people to come to the aid of their planet.";
console.log(text);
console.log(typeof text);
console.log(text.length);

console.log("---");

let words = text.split(" "); // SPLIT - CONVERT STRING TO ARRAY/LIST - BETTER PARSING - swiss army knife
console.log(words); // shows the whole array as quoted string in square brackets
console.log(typeof words); // shows type e.g. object/array
console.log(words.length); // length e.g. 16
console.log(words[0]); //first word e.g. "Now"
// console.log(words[15])
console.log(words[ words.length - 1 ]) //last word e.g. "planet." aka words[16 - 1]

//Manipulate the values
words[ words.length - 1 ] = "party." //replace the last word with party
console.log(words);

//Put array pieces back into a single string - using join()
const text2 = words.join(" "); //glue back together with a space outing a text string
console.log(text2);

// old school loop
// for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
// }

//new school
words.forEach(w => console.log(w));
