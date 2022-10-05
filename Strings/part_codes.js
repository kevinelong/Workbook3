// FORMAT: "supplierCode:productNumber-size"
//MORE ADVANCED PARSING

//USE indexOf with slice
// that returns all characters before the :
function getSupplier(code) {
    return code.slice(0, code.indexOf(":"));
}

// that returns all characters between the : and -
function getProductNumber(code) {
    return code.slice(code.indexOf(":") + 1, code.indexOf("-"));
}

// that returns all characters after the -
function getSize(code) {
    return code.slice(code.indexOf("-") + 1, code.indexOf(" "));
}

//BONUS
function getDescription(code) {
    return code.slice(code.indexOf(" ") + 1);
}

//TEST THE EXAMPLES
part1 = "ACME:123-L the large (L) part 123 is supplied by ACME";
part2 = "DI:12345-M the medium (M) part 12345 is supplied by DI";
part3 = "ACE:1-12 the size 12 part 1 is supplied by ACE";

console.log("SUPLIER" + getSupplier(part1));
console.log(getProductNumber(part1));
console.log(getSize(part1));
console.log(getDescription(part1));
console.log("");

console.log(getSupplier(part2));
console.log(getProductNumber(part2));
console.log(getSize(part2));
console.log(getDescription(part2));
console.log("");

console.log(getSupplier(part3));
console.log(getProductNumber(part3));
console.log(getSize(part3));
console.log(getDescription(part3));
console.log("");
