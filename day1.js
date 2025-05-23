// function showMessage(){
//     alert("hello king");
// }
// showMessage();
// showMessage();

//local variables
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// console.log(showMessage()); // Hello, I'm JavaScript!

// console.log(message); // ReferenceError: message is not defined
 // <-- Error! The variable is local to the function

 //outer variables
 //function can access variables from the outer scope

 let userName = "Abhishek";
 function shoowMessage(params) {
    let message = "hello " + userName;
    console.log(message);
    
 }
 shoowMessage();