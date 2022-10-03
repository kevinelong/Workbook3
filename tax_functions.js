// GET FEDERAL TAX - PAGE 22 EXERCISE 3 SECTION 1-17

/*
create a function that accepts gross pay *and*
*/

function getFederalTax(grossPay, withholdingCode){
    if(0 == withholdingCode){
        return grossPay * 0.23;
    }else if(1 == withholdingCode){
        return grossPay * 0.21;
    }else if(2 == withholdingCode){
        return grossPay * 0.195;
    }else if(3 == withholdingCode){
        return grossPay * 0.185;
    }else if(withholdingCode >= 4){
        const defaultBase = 0.18;
        const halfPercent = 0.005;
        const codeBase = 4;
        //STEP BY STEP
        let over = withholdingCode - codeBase;
        let extra = halfPercent * over;
        let rate = (defaultBase - extra);
        console.log("RATE: " + rate);
        return grossPay * rate;
        // OR ALL AT ONCE
        // return grossPay * (defaultBase - ((withholdingCode - codeBase) * halfPercent) )
    }else{
        console.log("Invalid Parameter for withholdingCode");
    }
}
console.log("P1 " + getFederalTax(750, 0)); //PERSON 1
console.log("P2 " + getFederalTax(1550, 2)); //PERSON 2
console.log("P3 " + getFederalTax(1100, 6)); //PERSON 3


/* EXPECTED:
172.5 for person 1
302.25 for person 2
186.99999999999997 for person 3
*/