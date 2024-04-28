function makeShirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
makeShirt();
//calling a function now with medium size and default message
makeShirt("Medium");
//calling afunction now with small size and also different print message
makeShirt("small", "I love JavaScript");
