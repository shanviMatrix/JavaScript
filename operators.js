//arithmetic operators (+, -, *, /, %)
console.log(12 + 6); //18
console.log(12 - 6); //6
console.log(12 * 6); //72
console.log(12 / 6); //2
console.log(12 % 5); //2

//comparison operators (==, ===, !=, !==, <, >, >=, <=,)
let a = 12; //assignment operator (=)
console.log(a + 6); //17
console.log(a == "12"); //true
console.log(a === "12"); //false
console.log(a != 10); //true
console.log(a !== "12"); //true
console.log(a < 15); //true
console.log(a <= 12); //true
console.log(a > 10); //true
console.log(a >= 12); //true

//logical operators (&&, ||)
console.log(true && false); //false
console.log(true || false); //true

//unary operators (++, --, !)
let b = 5;
console.log(++b); //6
console.log(--b); //5
console.log(!true); //false

//ternary operator (condition ? expr1 : expr2)
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); //Yes
