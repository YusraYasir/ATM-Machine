#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk"

let myBalance = 20000;
let myPin = 92747;

console.log(chalk.blue("\n\tWelcome to code-with-Yusra ATM Machine\n"));

let pinAns = await inquirer.prompt([
    {
      name:"pin",
      type:"number",
      message:(chalk.yellow("Enter your pincode"))
},
])
if(pinAns.pin === myPin) {
    console.log(chalk.green("\nyour pincode is correct!!!\n"));

let operationAns = await inquirer.prompt([
    { name:"operation",
      type:"list",
      message:"please select operation",
      choices:["withdraw","check balance","fast cash"]

},
]);
if(operationAns.operation === "check balance") {
    console.log(chalk.green`\n\tyour balance is ${myBalance}`)
}else if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        { name:"amount",
          type:"number",
          message:(chalk.yellow("Enter your amount"))

        },
]);
    let balance = myBalance - amountAns.amount
    if(amountAns.amount <= myBalance) {
    console.log(chalk.green`\n\tyour remaining balance is ${balance}\n\t`)
    }else {
        console.log((chalk.red`\n\tyour balance is insufficient.\n`))
    }
}else if(operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
        { name:"fastcash",
          type:"list",
          message:(chalk.yellow("please select one option")),
          choices:["1000","5000","10000","15000"]
    }
])
let balance2 = myBalance-fastcashAns.fastcash
console.log(chalk.green(`\n\tyour remaining balnace is ${balance2}\n`))

}


}else{
    console.log(chalk.red("\n\tyour pincode is incorrect!!!\n"))
}