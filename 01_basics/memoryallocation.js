//stack memory alocations

// let userEmail="abc@google.com"
// let anotherEmail=userEmail;
// console.log(userEmail);
// console.log(anotherEmail);
// anotherEmail="vij@gmail.com"
// console.log(anotherEmail);


//refrences memomry (heap)

// let user1={
//     name:"modi_ji",
//     age:75,
//     email:"modiji@gmail.com"
// }
// let user2=user1;
// console.log(user1);
// console.log(user2);

// user2.email="narendraji@gmail.com";

// console.log(user1);


//simple explantion using diagramns
// https://excalidraw.com/#json=GNWoi1Ew3UnA2Owi9illO,1cUXbDDqfJP8pTh6uTYLLQ

// *******************************************|| String In detail ||*********************************************************


var first=new String("abhishek")//another way to declare an string and acess all the functions of string
console.log(first.toUpperCase());//its converted to upper case but as its only an copy so only copy is been chnaged and orignall is untouched
console.log(first);//o5rignal is not changed
console.log(first[2]);//also key value can be accesd using the square brackets and passing the index

console.log(first.charAt(2));//charat function returns the charecter at the specified index
console.log(first.indexOf("h,"));//finding the index of given charecter 


// new way to concat is `${}`
let string1="narendra modi"
let string2="Best priminster in the world"

console.log(`${string1} is one of the best ${string2}`);//This the modern way to concat the strings or any value

let string3="    m s dhoni  ";
console.log(string3);
console.log(string3.trim());//it trims the spaces 

console.log(string1.substring(0,4));//sub string is used to cut the string from specfified index to index

console.log((string1.slice(0,4)));//slice also does ame as sub string but it also takes negative values like -4,-8
console.log(string1.slice(-8,4));//example for negative values

