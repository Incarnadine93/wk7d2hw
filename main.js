//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

let Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
    this.addAge = () => {
        this.age++;
    }
}

let person1 = new Person("Brandt", 18);
let person2 = new Person("Brendan", 19);


// Use an arrow to create the printInfo method

person1.printInfo();
person2.printInfo();

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

person2.addAge();
person2.addAge();
person2.addAge();

person2.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkString = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    })
}

checkString("Justice").then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

checkString("That fifth point though").then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// function boolToWord( bool ){
//     if(bool == true){
//       return"Yes"
//     }else{
//       return"No"
//     }
//   }

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// function solution(number) {
//     let x = 0;
//     for (let i = 0; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         x += i;
//       }
//     }
//     return x;
//   }