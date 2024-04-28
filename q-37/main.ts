function makeShirt (size: string = "large" , printMessage: string = "I love typeScript"){
      console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
makeShirt();

//calling a function now with medium size and default message

makeShirt("Medium")

//calling afunction now with small size and also different print message
makeShirt("small", "I love JavaScript")