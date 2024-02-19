//primitive data types
// 7 types of primitve data types => String boolena Null undefined number  symbol
 const score=100;//number datatype
 const scoreValue=100.3//number v
 const  isLoggedIn=false//bolean
 const temprature=null//null
const outsideTemp=undefined//undefined
const id=Symbol('123');//symbol => it returns an unique datatype even if the data is same below example
const anotherId=Symbol('123')
console.log(id === anotherId);//false as symbol returns an unique  datatype as Returns a new unique Symbol value.

const bigNumber=123456789123456789n//bigInt adding last trem as n would make it to BigInt
// console.log(typeof bigNumber);




//refrences type or (non premitive data types)
//Arrays objects functions

//array declartion
let myArray=["abh","bcd","gcd"];//declaration of array arrya is also an object
console.log(typeof myArray);//array are declared in square braces and can be accesed using index
//object declaration
let myobj={
    name:"abhishek",
    age:22,
    place:"india"
}
console.log(typeof myobj);//object is decalred in curly braces in values and keys

//function declartion can be done in many 3 ways
//first method //function  can be declared in an variable and the parameters can be passed in the variable name
const myFunction=function(a,b){
    return a+b;
}
console.log(myFunction(1,2));