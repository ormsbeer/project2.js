/**
 *   @author Ormsbee, Rhonda (ormsbeer@student.ncmich.edu)
 *   @version
 *   @ project 2 || created: 01/30/2018
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse, policyNumber , policyDueDate, accidentAmount, customerAge, monthlyPremium, totalBill;
let customerLastName, customerFirstName;
const BASE_PRICE = 100;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNumber();
        setCustomerLastName();
        setCustomerFirstName();
        setPolicyDueDate();
        setAccidentAmount();
        setCustomerAge();
        setTotalBill();
        setMonthlyPremium();
        printMonthlyPremium();
        setContinueResponse();
        return main(); //recursion
    }
    printGoodbye();
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {method}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc policyNumber mutator
 * @returns {null}
 */
function setPolicyNumber() {
    policyNumber = Number(PROMPT.question(`\nPlease enter customer's policy number: `));
}

/**
 * @method
 * @desc customerLastName mutator
 * @returns {null}
 */
function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter customer's last name: `);
}

/**
 * @method
 * @desc customerFirstName mutator
 * @returns {null}
 */
function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter customer's first name: `);
}

/**
 * @method
 * @desc policyDueDate mutator
 * @returns {null}
 */
function setPolicyDueDate() {
    policyDueDate = PROMPT.question(`\nPlease enter customer's policy due date: `);
}

/**
 * @method
 * @desc customerAge mutator
 * @returns {method}
 */
function setCustomerAge() {
    const MAX_AGE = 120;
    customerAge = Number(PROMPT.question(`\nPlease enter customer's age: `));
    if (customerAge < 15 || customerAge > MAX_AGE) {
        console.log(`I'm sorry, that is an incorrect age. Please try again.`);
        return setCustomerAge();
    }
}

/**
 * @method
 * @desc accidentAmount mutator
 * @returns {method}
 */
function setAccidentAmount() {
    const MAX_AMOUNT = 30;
    const MIN_AMOUNT = 0;
    accidentAmount = Number(PROMPT.question(`\nPlease enter amount of accidents in the last three years: `));
    if (accidentAmount < MIN_AMOUNT || accidentAmount > MAX_AMOUNT) {
        console.log(`I'm sorry, that is an incorrect amount. Please try again.`);
        return setAccidentAmount();
    }
}

/**
 * @method
 * @desc totalBill mutator
 * @returns {null}
 */
function setTotalBill() {
    const YOUNG_AGE = 15;
    const MID_AGE = 30;
    const MAX_AGE = 60;
    const YOUNG_AGE_PRICE = 20;
    const MID_AGE_PRICE = 10;
    const MAX_AGE_PRICE = 30;
    const ACCIDENT_PRICE = 50;

    if (customerAge > YOUNG_AGE && customerAge < MID_AGE) {
        totalBill = BASE_PRICE + YOUNG_AGE_PRICE;
    } else if (customerAge >= MID_AGE && customerAge <= MAX_AGE) {
        totalBill = BASE_PRICE + MID_AGE_PRICE;
    } else {
        totalBill = BASE_PRICE + MAX_AGE_PRICE;
    }
    totalBill = totalBill + accidentAmount * ACCIDENT_PRICE;
}

/**
 * @method
 * @desc monthlyPremium mutator
 * @returns {null}
 */
function setMonthlyPremium() {
    const MONTHS = 12;
    monthlyPremium = totalBill / MONTHS;
}

/**
 * @method
 * @desc monthlyPremium mutator
 * @returns {null}
 */
function printMonthlyPremium() {
    console.log(`\nThe Monthly Premium is: ${monthlyPremium}`);
}
