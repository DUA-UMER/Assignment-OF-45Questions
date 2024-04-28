//define variables
let rose = "rose";
let upperCaseRose = "ROSE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "mango", " banana",];
//test for equality & unequality with strings
 console.log("is rose is qual to rose?");
 console.log(rose == "rose");

 console.log("is rose is not equal to rose?");
 console.log(rose != "rose");
 
 //test using lowerCase functions
 console.log("is Rose is equal to rose after converting to lowerCase?");
 console.log(upperCaseRose.toLowerCase() == "rose");

 console.log("is Rose is not equal to rose after converting to lowerCase?");
 console.log(upperCaseRose.toLowerCase() != "rose");

//numerival tested
 console.log("is ten is equal to twenty?");
  console.log(ten == twenty);
//Not equal to
  console.log("is ten is not equal to twenty?");
  console.log(ten != twenty);
//Greater than
  console.log("is ten is greterthan zero?");
  console.log(ten > 0);
//Less than
console.log("is twenty is less thsn ten?");
console.log(twenty < 10);
//greater than or equal to 
console.log("is ten is greater than or equal to 5");
console.log(ten >= 5);
//less than or equal to 
 console.log("is twenty is less than or equal to 10");
 console.log(twenty <= 10);
//Test useing 'and & 'or' operators
//useing &&
console.log("twenty is not equal to ten and twenty is greater than ten ");
console.log( twenty != 10 && twenty > 10);

console.log("twenty is not equal to ten and twenty is less than ten ");
console.log( twenty != 10 && twenty < 10);
//useing ||
console.log("twenty is greater than fifty || twenty is eqal to twenty");
console.log(20 > 50 || 20 == 20 );

console.log("twenty is greater than fifty || twenty is  not eqal to twenty");
console.log(20 > 50 || 20 != 20 );

// test whether an item is include in array
console.log("is banana include in array ");
console.log(fruits.includes("apple"));
//not include
console.log("is banana is not include in array ");
console.log(!fruits.includes("apple"));


