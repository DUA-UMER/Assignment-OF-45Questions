function showMagicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
function makeGreat(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
let magiciansNames = ["Ricky Jay", "David Blaine", "Teller"];
let copymagiciansNames = magiciansNames.slice()

let copygreatMagicians = makeGreat(copymagiciansNames); 

showMagicians(magiciansNames);
showMagicians(copygreatMagicians);