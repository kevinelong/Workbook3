
// absolute number is the positive version even if its negative

console.log(123)
console.log(-123)

console.log(Math.abs(123))
console.log(Math.abs(-123))// always positive - never negative, (inverts makes opposite if negative)

// 1-12 Exercise #3 from page 16
function displayReceipt(totalDue, amountPaid){
    console.log("TOTAL DUE: $" + totalDue);
    console.log("AMOUNT PAID: $" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
        console.log("OWED: $" + owed);
    }else{
        let credit = Math.abs(totalDue - amountPaid); //NEVER NEGATIVE
        console.log("CREDIT BALANCE: $" + credit);
    }
}

displayReceipt(100, 120);
