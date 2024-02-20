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



// ***************************************************|| maths||*********************************************************