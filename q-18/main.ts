//making a array of countries and print its orignal order
let countriesTovisit: string[] = ["china", "Denmark", "Brazil","Argentina"];
console.log("original order:", countriesTovisit);

//print the array in Alphabetical order without modifying the actual list
 console.log("Alphabetical order:", [...countriesTovisit].sort());

//show that the array is still in its original order
 console.log("still in original order:", countriesTovisit);

//print the array in reversed order without modifying the actual list
 console.log("Reverse order:", [...countriesTovisit].reverse());

 //show that the array is still in its original order
 console.log("still in original order:", countriesTovisit);

 //we have changed the original array order now
 console.log("original array reversed:", countriesTovisit.reverse());

 //print the array to show that its back to its original order
 console.log("back to original order:", countriesTovisit.reverse());

 //print the array to show that its order has been hanged in Alphabetical order now
 console.log("sorted in Alphabetical order:", countriesTovisit.sort())

 //we have changed again the original array order now in reverse order again
 console.log("original array reversed again:", countriesTovisit.reverse());