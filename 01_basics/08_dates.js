let myDate=new Date();//date instance is created using Date function
console.log(myDate.toString());//converted to string because it was not in readable format
console.log(myDate.toLocaleString());//to locale string 


let myDate1=new Date("2023-02-01")
console.log(myDate1);
console.log(myDate1.getTime());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000))