var currentUsers = ["dua", "umer", "maham", "sarah", "aqsa"];
var newUsers = ["mano", "aiesh", "DUA", "manahil", "umer"];
//lopp through newUsers to check for userNames availablitiy
newUsers.forEach(function (newOneuser) {
    var ourCondition = currentUsers.some(function (currentOneuser) { return currentOneuser.toLowerCase() === newOneuser.toLowerCase(); });
    if (ourCondition) {
        console.log("sorry ".concat(newOneuser, " is already in the list"));
    }
    else {
        console.log("This user ".concat(newOneuser, " is available"));
    }
});
