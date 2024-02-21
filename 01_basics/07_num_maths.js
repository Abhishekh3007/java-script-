//********************|| NUmber functionality||*****************

const score=400//js automatically converted to number type
console.log(score);

const anotherScore=new Number(100)//declaring number using new operator its gives difrent output its wrapped in number object
console.log(anotherScore);

const number=123.44966
console.log(number.toFixed(2));//it only takes 2 numbers after decimal and rounds off
console.log(number.toString().length);//Also can be converted from number to string and can acess the string function such as length and char at
console.log(number.toPrecision(4));//takes the whole number and precisely converts to the 4 digit only use if expected number is expected 
currency=1000000
console.log(currency.toLocaleString('en-IN'));//makes the number readable in curency like indian rupess or any



// // ***************************************************|| maths||*********************************************************
console.log(Math.abs(-8));//used to convert negative value to positive but positive wont  be converted to the negavtivce

var ceilFunc=Math.ceil(5.1)//converts to the uuper number as of now its 5.1 it would be converted to the 6
console.log(ceilFunc);
console.log(Math.min(1,2,4,6,9,7,3));//math.min is used to find minimum in the array
console.log(Math.max(1,2,4,6,9,7,3));//math.max is used to find maximum in the array
console.log(Math.pow(5,5));//pow function is used to get the power of the declared value
console.log(Math.sqrt(25));//used to get square rot of the function



let otp=Math.floor(Math.random()*10000)+10000//random function is very important function as it is used to get the random numbers from 0 - 0.999
console.log(otp);
//math.floor is used to rounding of the number to nearest number
//formula to have minimum random value

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max - min + 1))+10*(10));//formula to get the min value from random numberrs
