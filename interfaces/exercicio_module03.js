/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(_a) {
    var principle = _a.principle, interestRate = _a.interestRate;
    // Calculates the monthly payment of an interest only loan
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = principle * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(_a) {
    var principle = _a.principle, interestRate = _a.interestRate, months = _a.months;
    // Calculates the monthly payment of a conventional loan
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
    return "The conventional loan payment is " + payment.toFixed(2);
}
var LoanPayment = { principle: 30000, interestRate: 5 };
var ConventionalLoanPayment = {
    principle: 30000,
    interestRate: 5,
    months: 180
};
var interestOnlyPayment = calculateInterestOnlyLoanPayment(LoanPayment);
var conventionalPayment = calculateConventionalLoanPayment(ConventionalLoanPayment);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
