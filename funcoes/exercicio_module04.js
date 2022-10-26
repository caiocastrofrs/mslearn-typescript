/* Module 4: Develop typed functions using TypeScript
   Lab Start  */
/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
var sortDescending = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
var sortAscending = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
var buildArray = function (items, sortOrder) {
    var randomNumbers = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === "ascending") {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
};
var myArray1 = buildArray(12, "ascending");
var myArray2 = buildArray(8, "descending");
var loanCalculator = function (principle, interestRate, months) {
    var interest = interestRate / 1200; // Calculates the monthly interest rate
    var payment;
    payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
    return Number(payment.toFixed(2));
};
console.log(loanCalculator(100, 200, 2));
