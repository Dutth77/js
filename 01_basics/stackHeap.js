// Stack (prmitive) you will get copy , Heap (non primitive) you get original one

//***************Stack ******************/

// let myYoutube = "dutth"
//  let myyoutubename = myYoutube

//  myyoutubename = "aswini"

//  console.log(myYoutube);
//  console.log(myyoutubename);



// Heap 

let user1 = 
{
    email:"user@gmail.com",
    upi:"user@ybl",
}

let user2 = user1
user2.email = "dutth@gmail.com"
console.log(user1);
console.log(user2);