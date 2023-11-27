//Primitive - 7
/* 
String
Number
Boolean
Null
Undefined
Symbol
BigInt
 */
const score = 23;
const id = Symbol("123")
//Reference Type/Non-Primitive
/* 
Arrays
Objects
Functions
JS is a dynamically typed language
TS is a statically typed language

 */
const actors = ["SRK","Hrithik","Salman"];
let myObj = {
    name:"kashish",
    age:19,
}

const myfunc = function(){
    console.log("this is my first func");
}
console.log(typeof myfunc)