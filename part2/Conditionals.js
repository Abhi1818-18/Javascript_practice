//checking if a number is greater than another number
let num1 = 12;
let num2 = 11;
if (num1 > num2) {
//   console.log(`${num1} is greater than ${num2}`);
}

//check if one string is equal to another string
let userName = "Abhi";
let anotherUsername = "Abhishek";
if(userName==anotherUsername){
//   console.log("pick different username");
}else{
//     console.log("username is available");
 }

 //check if a variable is number or not
 let cricScore = 45;
 if(typeof cricScore === 'number'){
    console.log(`${cricScore} is a number`)
 }else{
    console.log("cricScore is not a number");
 }

 //check if boolean value is true or false
 let isLoggedIn = false;
 if(isLoggedIn){
    console.log("user is logged in");
    
 }else{
    console.log("user is not logged in");
 }


 //check if array is empty or not
 let teams=["rcb","mi","csk"];
 console.log(teams.length);
 if(teams.length === 0){
    console.log("teams array is empty");
    
 }else{
    console.log("teams array is not empty");
 }
 