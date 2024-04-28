var userName = ["dua", "umer", "maham", "admin", "sarah"];
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loggin again."));
    }
});
