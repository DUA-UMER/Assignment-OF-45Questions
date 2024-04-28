function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("make a sandwich with these items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("now enjoy sandwich");
}
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("cheese", "chicken", "mayo", "onion", "egg");
