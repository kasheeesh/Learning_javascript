const name = "Kashish"
const age = 19;
console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String("Shourya")
gameName[2] = "a";
console.log(gameName);
//Strings are immutable
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('r'));
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString)
//can use negative values in .slice, but not in substring

const newS = "       hi  ";
// newS.trim(); (read more about trim start, trim end);
console.log(newS.trim());
const url = "google.com"
console.log(url.replace("google","facebook"));
