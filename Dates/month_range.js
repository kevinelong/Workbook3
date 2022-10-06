let highSeason = false;

let d = new Date("august 30 2023") // start date

let y = d.getFullYear();

let rangeStart= new Date("june 1 " + y) //range start
let rangeEnd = new Date("august 31 " + y) //range end

if(d >= rangeStart && d <= rangeEnd){ //&& AND
    highSeason = true;
}

console.log(highSeason);
