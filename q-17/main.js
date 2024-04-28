"use strict";
//creating a guest List array
let guestList = ["dua ", "umer", "abrish", "amna"];
//making variable for those guest who can't come
let notCome = guestList["0"];
//printing the name of guest who can't come
console.log(notCome, "can't come");
//add or remove values from guest List array
guestList.splice(0, 1, "Mishal");
//message print for bigger table
console.log("listen! We have found a bigger table for dinner.");
//adding a new guest at starting index of array
guestList.unshift("Eman");
//adding a new value at starting index of array
guestList.push("Noor");
//adding a new guest at middle index of array
let middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Aqsa");
console.log("updated list of our guest");
guestList.forEach(oneguest => console.log(`Hi ${oneguest}, would you like to dinner with me `));
//inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
//using while loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} i can't invite you to dinner`);
}
//sending to the last two guest in the list 
console.log("invitations to the last two guests");
guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));
//Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
