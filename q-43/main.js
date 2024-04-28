function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magiciansNames = ["Ricky Jay", "David Blaine", "Teller"];
var copymagiciansNames = magiciansNames.slice();
var copygreatMagicians = makeGreat(copymagiciansNames);
showMagicians(magiciansNames);
showMagicians(copygreatMagicians);
