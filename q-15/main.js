var guestList = ["DUA", "UMER", "ABRISH", "AMNA"];
var notCome = guestList[0];
console.log(notCome, "can't come");
guestList.splice(0, 1, "Mishal");
guestList.forEach(function (guest) { return console.log("Hi ".concat(guest, ", would you like to dinner with me?")); });
