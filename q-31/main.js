var userNames = ["dua", "umer", "maham", "admin", "sarah"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for loggin again."));
        }
    });
}
