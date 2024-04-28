let currentUsers = ["dua", "umer", "maham", "sarah", "aqsa"]
let newUsers = ["mano", "aiesh", "DUA", "manahil", "umer"]

//lopp through newUsers to check for userNames availablitiy
newUsers.forEach(newOneuser => {

    let ourCondition = currentUsers.some(currentOneuser => currentOneuser.toLowerCase() ===newOneuser.toLowerCase())

    if(ourCondition){
  console.log(`sorry ${newOneuser} is already in the list`)
    }
    else{
        console.log(`This user ${newOneuser} is available`)
    }
})