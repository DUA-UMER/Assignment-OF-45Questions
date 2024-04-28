function creatCar(manufacturer, modle, ...options){
     let car = {
        manufacturer: manufacturer,
        model: modle,
    
     };
     options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim();
     });

     return car;
}

let myCar = creatCar("toyota", "corrolla", "colour: black", "sunroof: true");

console.log(myCar);