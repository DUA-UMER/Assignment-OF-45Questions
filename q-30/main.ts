let userName = ["dua","umer","maham","admin","sarah"];

userName.forEach(oneUser => {
    if (oneUser === "admin"){
console.log(`Hello ${oneUser}, would you like to see a status report`)
    }else {
        console.log(`Hello ${oneUser}, thank you for loggin again.`)
    }
})