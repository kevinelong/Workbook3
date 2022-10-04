
// SECTION 2-12 EXERCISE 1

// parse - VERB: cut into pieces - like paring-knife, parcel, parsec

function parseAndDisplayName(name) {
    const SPACE = " ";
    const STARTING_INDEX = 0;
    const NO_MATCH = -1;
    let whereToCut = name.indexOf(SPACE); // WHERE IS THE SPACE - offset
    
    if(whereToCut == NO_MATCH){
        //one name
        console.log("\nONLY: " + name);
        return; //EXIT FUNCTION
    }

    //AT LEAST TWO NAMES
    let leftSide = name.substring(STARTING_INDEX, whereToCut); //TWO PARAMETERS - START AND STOP
    let rightSide = name.substring(whereToCut + 1); // ONE PARAMETER - WHERE TO START, (IMPLIED TO THE END)

    //CHECK FOR MIDDLE
    let whereToCut2 = rightSide.indexOf(SPACE); // WHERE IS THE SECOND SPACE - offset

    if (whereToCut2 == NO_MATCH) {
        // TWO NAMES
        //OLD CODE - NO MIDDLE
        console.log("\nNAME: " + name);
        console.log("FIRST: " + leftSide);
        console.log("LAST: " + rightSide);
        return; // EXIT BECAUSE WE ARE DONE HERE
    }

    //THREE NAMES

    //NEW CODE
    let middleName = rightSide.substring(STARTING_INDEX, whereToCut2); //TWO PARAMETERS - START AND STOP
    let lastName = rightSide.substring(whereToCut2); // ONE PARAMETER - WHERE TO START, (IMPLIED TO THE END)
    console.log("\nNAME: " + name);
    console.log("FIRST: " + leftSide);
    console.log("MIDDLE: " + middleName);
    console.log("LAST: " + lastName);
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

// ONE TWO OR THREE NAME TEST
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");