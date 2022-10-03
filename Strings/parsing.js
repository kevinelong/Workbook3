
// SECTION 2-12 EXERCISE 1

// parse - VERB: cut into pieces - like paring-knife, parcel, parsec

function parseAndDisplayName(name){
    const SPACE = " ";
    const STARTING_INDEX = 0;
    let whereToCut = name.indexOf(SPACE); // WHERE IS THE SPACE - offset
    let leftSide = name.substring(STARTING_INDEX, whereToCut); //TWO PARAMETERS - START AND STOP
    let rightSide = name.substring(whereToCut); // ONE PARAMETER - WHERE TO START, (IMPLIED TO THE END)

    console.log("NAME: " + name);
    console.log("FIRST: " + leftSide);
    console.log("LAST: " + rightSide);
}

/*EXPECTED
Name: Brenda Kaye
First name: Brenda
Last name: Kaye 
*/

let name = "Brenda Kaye"; 
parseAndDisplayName(name)

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");