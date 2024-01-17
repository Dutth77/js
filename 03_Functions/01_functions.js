

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
// function loginUserMessage(username) {
//     if (!username) {
//         console.log("please enter Username");
//         return
//     }
//     return`${username} just logged in`
    
// }
// console.log(loginUserMessage("Dutth"));
// console.log(loginUserMessage());


function caliculateCartPrice(...num1) {

    return num1
    
}

// console.log(caliculateCartPrice(200, 400, 500,555));

const user={
    username:"Dutth",
    price: 199
}
function handleobject(anyobject) {
    console.log(`username ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
// handleobject({
//     username: "sam",
//     price: 399
// })

// ************************Array Function *********************

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// Notes
// ... rest operater








// Notes
// functions asimple
//function addTwoNumbers (number1,number2) // parameters
// addTwoNumbers(3,4) // arguments