const { use } = require("react");

function sayMyName()
{
    console.log("S");    
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("V");
    console.log("I");
}
sayMyName();

// function addTwoNums(num1,num2) //parameters
// {
//     console.log(num1+num2);
// }

function addTwoNums(num1,num2) 
{
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
const result=addTwoNums(5,7);
// console.log("Result: ", result);

function loginUserMessage(username)
{
    if(use===undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage(""));