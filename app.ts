#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright('\t\t ***************************** \t\t'));
console.log(chalk.blueBright('\t\t Automated Teller Machine(ATM) \t\t'));
console.log(chalk.blueBright('\t\t ***************************** \t\t'));

const myPin = 123123;
let myBalance = 20000;
let condition=true;

console.log(chalk.redBright('\n\t\tPin number is '+myPin));

const pinAnswer = await inquirer.prompt(
    {
        name: 'pin',
        type: 'password',
        message: chalk.blueBright('\n Enter your pin'),
        mask: '*',
    }
) 
while(condition){
if (pinAnswer.pin === myPin.toString()){

const userOptions = await inquirer.prompt(
    [
        {
            name: 'options',
            type: 'list',
            message: chalk.greenBright('\n Select one option from the following list:'),
            choices: ['Check Balance','Deposit Cash','Transfer Amount','Pay Bills','Withdraw'],
        }
    ]
);
if (userOptions.options === 'Check Balance'){
    console.log(chalk.blueBright(`\n\t Your current balance is ${myBalance}`))
}
else if(userOptions.options === 'Deposit Cash'){
 let deposit=await inquirer.prompt(
    {
        name:'cash',
        type:'number',
        message:chalk.greenBright('\n Enter your amount which you have to deposit:')
    }
 )
 console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
 console.log(chalk.blueBright(`\n\tDeposit successfully ${deposit.cash}`));
 console.log(chalk.blueBright(`\n\tNow current balance is ${myBalance += deposit.cash}`));
}
else if(userOptions.options === 'Transfer Amount'){
 let transfer=await inquirer.prompt(
    {
        name:'cash',
        type:'number',
        message:chalk.greenBright('\n Enter your amount which you have to transfer:')
    }
 )
 if(transfer.cash < myBalance){
 console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
 console.log(chalk.blueBright(`\n\tYou transfered ${transfer.cash}`));
 console.log(chalk.blueBright(`\n\tNow remaining balance is ${myBalance -= transfer.cash}`));
 }
 else if(transfer.cash > myBalance){
    console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
    console.log(chalk.redBright('\n\tInsufficient amount to transfer!'))
 }else if(transfer.cash === myBalance){
    console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
    console.log(chalk.blueBright(`\n\tSuccessfully transfered! Now your remaining balance is ${myBalance-=transfer.cash} `))
 }
}
else if(userOptions.options === 'Pay Bills'){
    let bills=await inquirer.prompt(
        {
            name:'cash',
            type:'list',
            message:chalk.greenBright('\n Which bill you have to pay?'),
            choices:['KE','SSGC','KWSB']
        }
    )
if (bills.cash === 'KE'){
let billKE=await inquirer.prompt(
    {
    name:'amount',
    type:'number',
    message:chalk.greenBright('\n Enter your KE bill amount:')
}
)
if(billKE.amount < myBalance){
console.log(chalk.blueBright(`\n\tBill paid ${billKE.amount}`));
console.log(chalk.blueBright(`\n\tYour remaining balance is ${myBalance -= billKE.amount}`))
}else if(billKE.amount > myBalance){
    console.log(chalk.redBright(`\n\t Insufficient balance!`))
}else if(billKE.amount === myBalance){
    console.log(chalk.blueBright(`\n\t Bill paid ${billKE.amount}`))
    console.log(chalk.blueBright(`\n\tRemaining balance is ${myBalance -= billKE.amount}`))
}
}
else if(bills.cash === 'SSGC'){
 let billSSGC=await inquirer.prompt(
    {
        name:'amount',
        type:'number',
        message:chalk.greenBright('\n Enter your SSGC bill amount:')
    }
 )
 if(billSSGC.amount < myBalance){
 console.log(chalk.blueBright(`\n\tBill paid ${billSSGC.amount}`));
console.log(chalk.blueBright(`\n\tRemaining balance is ${myBalance -= billSSGC.amount}`))
 }else if(billSSGC.amount > myBalance){
    console.log(chalk.redBright(`\n\t Insufficient balance!`))
}else if(billSSGC.amount === myBalance){
    console.log(chalk.blueBright(`\n\t Bill paid ${billSSGC.amount}`))
    console.log(chalk.blueBright(`\n\tRemaining balance is ${myBalance -= billSSGC.amount}`))
}
}
else if(bills.cash === 'KWSB'){

let billKWSB=await inquirer.prompt(
    {
        name:'amount',
        type:'number',
        message:chalk.greenBright('\n Enter your KSWB bill amount:')
    }
)
if(billKWSB.amount < myBalance){
console.log(chalk.blueBright(`\n\tBill paid ${billKWSB.amount}`));
console.log(chalk.blueBright(`\n\tYour remaining balance is ${myBalance -= billKWSB.amount}`))
}else if(billKWSB.amount > myBalance){
    console.log(chalk.redBright(`\n\t Insufficient balance!`))
}else if(billKWSB.amount === myBalance){
    console.log(chalk.blueBright(`\n\t Bill paid ${billKWSB.amount}`))
    console.log(chalk.blueBright(`\n\tRemaining balance is ${myBalance -= billKWSB.amount}`))
}
}
}
else if (userOptions.options === 'Withdraw'){
    let withdrawMethod = await inquirer.prompt(
        {
            name: 'method',
            type: 'list',
            message: chalk.greenBright('\nSelect one method:'),
            choices: ['Enter your amount','Fast Cash'],
        }
    )
if(withdrawMethod.method === 'Enter your amount'){
    let amountAnswer = await inquirer.prompt(
        {
            name: 'amount',
            type: 'number',
            message: chalk.greenBright('\nEnter your amount:'),
        }
    )
    if (amountAnswer.amount < myBalance){
        console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
       console.log(chalk.blueBright('\n\tNow remaining balance is', myBalance -= amountAnswer.amount ));
    } else if(amountAnswer.amount > myBalance){
        console.log(chalk.redBright(' \n\t Insufficient amount!'))
    } else if(amountAnswer.amount === myBalance){
        console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
       console.log(chalk.blueBright(`\n\tRemaining balance is ${myBalance -= amountAnswer.amount}`));
    }
}
else if(withdrawMethod.method === 'Fast Cash'){
    let fastCash = await inquirer.prompt(
        {
            name: 'fast',
            type: 'list',
            message: chalk.greenBright('\nSelect one amount from the following:'),
            choices:['1000','5000','10000','15000','20000'],
        }
    )
    if(fastCash.fast < myBalance){
        console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
    console.log(chalk.blueBright('\n\tNow remaining balance is', myBalance -= fastCash.fast))
    }else if(fastCash.fast > myBalance){
        console.log(chalk.redBright('\n\tInsuffient balance!'))
    }else if(fastCash.fast === myBalance.toString()){
        console.log(chalk.blueBright(`\n\tYour current balance is ${myBalance}`));
       console.log(chalk.blueBright(`\n\tRemaining balance is `, myBalance -= parseInt(fastCash.fast)))
    }
   }
  }
}
else{
    console.log(chalk.redBright('\n\tIncorrect pin code!'))
};

 let continue_exit=await inquirer.prompt(
    {
        name:'cnt_ext',
        type:'list',
        message:chalk.greenBright('\nDo you want to continue or exit?'),
        choices:['Continue','Exit']
    }
    
 )
 if(continue_exit.cnt_ext === 'Continue'){
    (condition=true)
 }else{
    (condition=false)
 }
};

console.log(chalk.blueBright('\n\t\t ***************************** \t\t'));
console.log(chalk.blueBright('\t\t      Thanks For Using ATM     \t\t'));
console.log(chalk.blueBright('\t\t ***************************** \t\t'));