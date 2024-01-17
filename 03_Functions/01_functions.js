

function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("w");
    console.log("i");
    console.log("n");
    console.log("i");
}

//  sayMyName()

// function addTwoNumbers(number1,number2) 
// {
//    console.log(number1 + number2); 

// }

function addTwoNumbers(number1,number2) 
{
   let result = number1 + number2
   return result
}
const bully = addTwoNumbers(3,4) 
// console.log("Result:", bully );


// *******************************************
function loginUserMessage(username) {
    if (!username) {
        console.log("please enter Username");
        return
    }
    return`${username} just logged in`
    
}
// console.log(loginUserMessage("Dutth"));
console.log(loginUserMessage());


// Notes
// functions asimple
//function addTwoNumbers (number1,number2) // parameters
// addTwoNumbers(3,4) // arguments