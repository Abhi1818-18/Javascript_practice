// let myFavouriteFruitbox = ["apple", "banana", "oranage" ];

// let emptyBox = [];
// // console.log(myFavouriteFruitbox[1]); //banana
// // console.log(myFavouriteFruitbox[2]); //oranage
// // console.log(myFavouriteFruitbox[0]); //apple

// // console.log(myFruitBox[3]); // This will give us "undefined" because there's no fruit at index 3.

// console.log(myFavouriteFruitbox.length); // 3

// myFavouriteFruitbox[0]  = "Mango";
// console.log(myFavouriteFruitbox);

// myFavouriteFruitbox.push("grape");
// console.log(myFavouriteFruitbox); // ["Mango", "banana", "oranage", "grape"] add element at the end
// //we can also add multiple elements at once

// let teams = ["Arsenal", "Chelsea", "Liverpool", "Manchester United"];
// teams.unshift("Tottenham"); // add element at the beginning
// console.log(teams); // ["Tottenham", "Arsenal", "Chelsea", "Liverpool", "Manchester United"]

// teams.pop(); // remove the last element
// console.log(teams); // ["Tottenham", "Arsenal", "Chelsea", "Liverpool"]

// teams.shift(); // remove the first element
// console.log(teams); // ["Arsenal", "Chelsea", "Liverpool"]

// //checking if an element exists in the array
// console.log(teams.includes("tottenham")); // false
// console.log(teams.includes("Arsenal")); // true

// //finding the spot of an element in the array
// console.log(teams.indexOf("Chelsea")); // 1

// //combining arrays
// let allfruitsAndTeams = myFavouriteFruitbox.concat(teams);
// console.log(allfruitsAndTeams); // ["Mango", "banana", "oranage", "grape", "Arsenal "Chelsea", "Liverpool"]

//first question
let myPets = ["dog", "cat", "fish"];
myPets.push("hamster");
console.log(`pet at index 0 is -: ${myPets[0]}`);
console.log(myPets);

//second question
let birthdayGuests = ["Mom", "Dad", "Aunt Sarah", "Uncle John", "Cousin Lily"];
console.log();
let sarahIndex = birthdayGuests.indexOf("Aunt Sarah");
console.log(`Aunt Sarah is at index ${sarahIndex}`);
if (sarahIndex !== -1) {
    birthdayGuests.splice(sarahIndex, 1);
}

//console.log(birthdayGuests);

birthdayGuests.unshift("Sam");
console.log(birthdayGuests);

if(birthdayGuests.includes("Uncle John")) {
    console.log("uncle John is invited");
    
} else{
    console.log("uncle John is not invited");
}
console.log(birthdayGuests);

//third question
let fruitBowl = ["apple", "banana", "grape", "apple", "orange", "grape"];

let appleCount = 0;

fruitBowl.forEach (fruit =>{
    if(fruit === "apple"){
        appleCount++;
    }
});
console.log(`There are ${appleCount} apples in the fruit bowl.`);

//add new fruit to the bowl
fruitBowl.push("kiwi");
console.log(fruitBowl);

//print the last fruit in the bowl
let lastFruitIndex = fruitBowl.length -1;

let lastFruit = fruitBowl[lastFruitIndex];
console.log(`The last fruit in the bowl is ${lastFruit}.`);