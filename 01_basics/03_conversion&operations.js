//all the type conversion happens in class like 
//Number for integr conversion
//String for string cone=version
//Boolean for true or false




let score="abhi";
console.log(typeof score);//output string
console.log(typeof(score));//output string
let valueNumber=Number(score);//trying to convert number got converted but while displaying the value NaN
console.log(typeof valueNumber);//out is given as its coinvertd to number but its nit
console.log(valueNumber);//output NaN not aloted number



let score1=null;//score is initialized as null
let value1=Number(score1);//type conversion to integer
console.log(typeof(value1));//output is Number
console.log(value1);//output is 0 null is converted to 0



let score2=undefined;//value asigned is undefined
let value2=Number(score2);//type conevrsion
console.log(typeof value2);//output is Number
console.log(value2);//NaN is output because if undefined


let score3=true;//asigned an bolean value (1 or 0)true or false
let value3=Number(score3);//type conersion to number
console.log(typeof value3);//output as number
console.log(value3);//output is 1 because of true

let score4="33";//number is asigned in an string format
let value4=Number(score4);//string is converted to number
console.log(typeof value4);//output number
console.log(value4);//output is 33 in integre

let score5="33abc";//asigned an inapropriate value that is 33abc
let value5=Number(score5);//type conevrsion to number from string
console.log(typeof value5);//output is number because of type conversion happens but is invalid 
console.log(value5);//output NaN

//boolean Example
let isLoggedIn=0;//asigend value 0 or 1 ,""=>false,"abhsi"=>true,anynumber expect 0=>true
let bolleanLoggedIn=Boolean(isLoggedIn);//conec=verted to boolean value
console.log(bolleanLoggedIn);//output either true or false

//string example
let stringValue=33;//asigned an integer
let convertedToString=String(stringValue);//converted to string
console.log(typeof convertedToString);//checking its typeof 
console.log(convertedToString);//output is 33 but its an string