function showMagicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
function makeGreat(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
let magiciansNames = ["Ricky Jay", "David Blaine", "Teller"];
let greatMagicians = makeGreat(magiciansNames);
showMagicians(greatMagicians);
