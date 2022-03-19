// Declaring two arrays, one for user age and one for subscription status.

var userAge = [17,18,19,20];
var isSubscribed = [true, false, true, false];

//created loop indicating the loop starting count at =0 (i=0). Then indicating the condition of the loop, ending at 3. 
//(the loop will end when the array length of 3 is reached)
//i++ indicates that it will execute after every loop iteration, increasing the counter until 0 1 2 3 have been run through the loop.
// the console will print the user age and their subscription status for each variable in the array order.

for(let i=0; i <=3; i++) {

    //console.log(`${userAge[i]} is ${isSubscribed[i]}`); //I commented this out after making sure it would pair my arrays correctly

// making conditions for the 3 outcomes with my 2 arrays:
    if ((userAge[i] <18) && (isSubscribed[i])) {
        console.log('User is not of age and is subscribed'); //if user in the array is under 18 and is subscribed
    }else if ((userAge[i] >= 18) && (isSubscribed[i])) {
            console.log('User is of age and subscribed') //if user in the array is over 18 and is subscribed
    }else {
            console.log('User is of age and not subscribed') // if user in the array is over 18 and not subscribed
    }
}