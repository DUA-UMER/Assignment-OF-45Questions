function makeSandwich(...items: string[]){
   console.log("make a sandwich with these items:");
    items.forEach(singleItem => console.log(singleItem));
   console.log("now enjoy sandwich");
}

makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("cheese", "chicken", "mayo", "onion", "egg");