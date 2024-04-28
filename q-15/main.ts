let guestList = ["DUA","UMER","ABRISH","AMNA"];

let notCome = guestList[0];

console.log(notCome, "can't come");

guestList.splice(0, 1, "Mishal");

guestList.forEach(guest => console.log(`Hi ${guest}, would you like to dinner with me?`));