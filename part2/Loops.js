//loops
/*loops keep doing same thing or specific task until certain conditions met*/
//repeat taks over and over again until certain condition is met
//for loop : Do this for specific number of times
//while loop : keep doing this until condition is true

/*
for(start counting;keep_going_condition;how_to_change_count){
//do these actions inside curly braces
}
*/
/*
for(let i=0;i<5;i++){
    console.log("hi");
    
}
    for(let count=1;count<=3;count++){
    console.log(`The current count is : ${count}`);
    
}
*/  

//while loop
/*let numberOfBallons=3;
while (numberOfBallons>0) {
    console.log("pop ! we have " +numberOfBallons+ " left");
    numberOfBallons--;
    
}
console.log("all ballons popped");
 */

//looping through array
let footBallers = ["ronaldo","messi","pepe","kaka","mbappe"];

for(let i=0;i<footBallers.length;i++){
    console.log(`i love ${footBallers[i]} !...`);
    
}
console.log("all footballers are good");


