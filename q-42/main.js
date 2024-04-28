function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magiciansNames = ["Ricky Jay", "David Blaine", "Teller"];
var greatMagicians = makeGreat(magiciansNames);
showMagicians(greatMagicians);
