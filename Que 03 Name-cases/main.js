var personName = "dua umer";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (add) { return add.toUpperCase(); }));
