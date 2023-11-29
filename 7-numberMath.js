const score = 400;
const balance = new Number(400);
const balance1 = new Number("200");
console.log(balance1);
console.log(balance + balance1);
console.log(typeof balance.toString());
//.toFixed gives the decimal values after the number
const trynum = 100;
console.log(trynum.toFixed(2));
const tryname1 = 123.8996;
console.log(tryname1.toPrecision(4));//very interesting output, it rounds of.
console.log(tryname1.toPrecision(3));
const hundereds = 10000
console.log(hundereds.toLocaleString());


//Math
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.min(4,3,5,7));
console.log(Math.random());//gives random values between 0 and 1

const min = 10;
const max = 20;
console.log(Math.random() * (max-min + 1) + min);






