#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 12345;
console.log(`pin is ${myPin}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([
        { name: "Operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        //  =,+=, -=
        if (myBalance >= amountAns.amount) {
            console.log(myBalance -= amountAns.amount);
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.Operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operationAns.Operation === "fast cash") {
        let amountAnswer = await inquirer.prompt([{
                name: "amounts",
                type: "list",
                message: "please select amount",
                choices: [500, 1000, 2000, 3000, 4000]
            }
        ]);
        //-= 
        myBalance -= amountAnswer.amounts;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrecct pin number !");
}
