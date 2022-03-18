// Declaring two arrays, one for user age and one for subscription status.

var userAge = [17,18,19,20];
var isSubscribed = [true, false, true, false];
// added array length for loop
var arrayLength = 3;
//created loop
//I don't understand how to nest the conditional inside of the loop statement
for(let counter = 0; counter <= arrayLength; counter++){
    
if (userAge>=18){
    console.log("user is of age");
} else{
    console.log("user is not of age");
}

if (isSubscribed){
    console.log("user is subscribed");
} else if (!isSubscribed){
    console.log("user is not subscribed");
}

    console.log(userAge[counter] + isSubscribed[counter]);
}
