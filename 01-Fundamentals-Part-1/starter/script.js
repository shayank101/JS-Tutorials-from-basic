// we can run the node file in the terminal by executing : --> node + fileName  in the terminal


// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");
// console.log(20 + 56 + 9 -30 * 12)       // this is used to printing in the console of the chrome developer tool







// ************* Values & Variables


// Values
// console.log('Shy');
// console.log(17);

// variable - this is used to store the variable
// let firstName = "Shayan";
// console.log(firstName)

// firstName = "Shaan";
// console.log(firstName)



/*
Rules for Variables :
- Use camel casing for naming: fName, numSeries, gameOn
- can not start with number.
- we can only use letters, numbers, underscore, $... others are not allowed as they are reserved.
- don't start with upper case letter.
- constant are written in upper case i.e. PI = 3.14

*/

/*

// name the variable to be more descriptive
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";



// assignment 1
let country = "India";
let continent = "Asia";
let population = "14  million";

// assignment 2 
console.log(country, continent, population)
*/







// ****************  Data Types
// values are of 2 types : object or Primitive(everything else i.e. values assigned to the variables)

/*
Data types NNSSBBU
- Null : In when there is nothing then its null an empty value
- Number : used for integer or float
- String : Everything written in double or single quote
- Symbol
- Boolean : True or False
- BigInt : Larger integers than the numbers can hold.
- Undefiened : Value taken by the variabke i.e. not defiened

Js has dynamic typing this means we dont't have to define the variable data type we can simply write them.
Value has the data type and not the variable.

*/

/*

console.log(true)

let javascriptIsFun = true;
console.log(javascriptIsFun)

// -------------------- typeof operator this will tell you the data type
console.log("true -", typeof true);
console.log("Shayan -", typeof "Shayan");
console.log(3748 , typeof 3748);
console.log("jonas -", typeof jonas);   // this give undefiened bcuz we have not enclosd with quotes so it is not string and we have not declared jonas as a variabke too therefore it is undefiened data type or an empty value if we declare a value and do not assign the value.

javascriptIsFun = "Yes!"
console.log(javascriptIsFun)
*/






// ****************** let var and const


/*
var is the older way of using JS variable and you must avoid it.

let : we can use to decalare the variable and re assign them.
const : this can only be declared and but no re assigned


use const most of the time and let only where you believe that in future this value will change
*/

/*

let fName = "Shayan"
console.log(fName)

let lName 
console.log(lName)  // consoles undefiened

lName = "Khan"
console.log(lName)


const fullName = "Shayan Khan"
console.log(fullName)

// fullName = "Shaan"  // gives type error saying assignment to const which cannot be done 
// we have to declare and assign them and we can not re assign const value

// const school    // Consoles error :  Missing initializer in const declaration i.e. declared but not initialized

*/






// ************** Basic operator


/*
// arithematic operator

const now = 2023;
const ageShayan = now - 2000;
const ageSana = now - 1998;
console.log(ageShayan, ageSana);

console.log(ageShayan *2, ageShayan/10, 2**3); 


// we can use + to concatenate the strings
const firstName = "Shayan";
const lastName = "Khan";
console.log(firstName + " " + lastName);

// typeof operator this is use to obtain the type of value
console.log(typeof firstName);

// assignment operator i.e. =; as it assignss the value
let x = 10 + 5;
x += 10;
console.log(x);

let y = 1;
y++;        // increment by 1
console.log(y);
y--;        // decrement by 1
console.log(y);


// comparison operator 
// this is used to obtain boolean
console.log(ageShayan > ageSana);
console.log(ageShayan < ageSana);
console.log(ageShayan == ageSana);

const isMajor = ageShayan > 18;
console.log("isMajor = ", isMajor);

const avgAge = (ageSana + ageShayan) / 2;
console.log(avgAge);

*/





// Coding challege 1
// BMI calculator

/*


const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;

const higherBmi = bmiMark > bmiJohn;
console.log("BMI of Mark is greater than John : ", higherBmi)

// coding chalenge 2 
// improve the bmi calculator

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is higher than John's! `);
    console.log(`Mark's BMI (28.3) is higher than John's ${Math.round(bmiJohn*10)/10})`);
};

*/







// template literals ----------- STRING INTERPOLATION

/*

const firstName = "Shayan";
const job = "teacher";
const birthYear = 2000;
const year = 2037;

const shayan = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(shayan);

const shayanNew = `Template string : I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(shayanNew);


// multiline is easy by template strings
console.log("we are \n\
learning \n\
javaScript..\n")

console.log(`And soon
we will
be the the only
one in the room.`)
*/






// ******* if else : control flow structure

/*
const age = 5;

if ( age >= 18){
    console.log(`Sarah can start driving now 🏁`);
} else {
    console.log(`You can come after ${18 - age}!`)
};


// finding the century by the birth year
const birthYear = 2012;

let century;
if (birthYear <= 2000){
    century = 20
} else {
    century = 21
}

console.log(century)

*/





// type conversion & coercion

// conversion is when we convert the type from one to another.
// coercion is when js itself converts the type.


/*
const inputYear = "1999"

console.log(inputYear + 10)     // it concatenates instead of simplification because its a number for simplification we need to convert string into number.

// string to number
console.log(Number(inputYear) - 19)

// number to string
console.log(String(123))




// type coercion
// only + will make the same type and the converted and concatenated
console.log("2020" + 2)     // it concatenates
console.log("2020" * 2)     // it simplifies
console.log("2020" - 2)

// guess n
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log("10"-"18"-"5"+"100")
*/





// *************** Truthy and Falsy values

// there are only 5 falsy values and they are : 0, "", null, undefiened, false.
// empty string is false.

/*

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))


// use case to check true or false value
const money = 110;

if (money){
    console.log("Don't spend it all!")
} else {
    console.log("You should get a job.")
}


//  use case to check whether the value is defiened or not
let height;
if(height){
    console.log('Yayy.... Height is defiened')
} else {
    console.log("Height is not defiened....")
}

*/





// ***************** equality operator == vs ===

/*

= : assignment operator assigns the value
== : compares the value, loose form
=== : compares the value and type, strict form

*/


/*
const age = 18;
if(age === 18) console.log("You just became an adult....!");


const favourite = prompt("Enter your fav number : ")
console.log(favourite)
console.log(typeof favourite)

if (favourite == 23) {
    console.log(`cool! ${favourite} is amazing number...`) 
} else if (favourite == 7) {
    console.log(`cool! ${favourite} is amazing number...`) 
} else {
    console.log(`Not so cool! ${favourite} is amazing number...`) 
}

if(favourite !== 23) {
    console.log("Why not 23")
}

*/






// *****************  Boolean Logic

/*

Boolean logic uses true and false value for the complex programming.
AND : True when all conditions are true
OR  : True when any one condition is true 
NOT : negation true beecomes false.

*/

/*

const hasDriverLicense = true;       //A
const hasGoodVision = false;     //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && !hasGoodVision;     // true && (!false)

// if (shouldDrive) {
    //     console.log("Sarah is able to drive");
    // } else {
//     console.log("Someone else should drive.........");
// }

const isTired = false        //c
console.log(hasDriverLicense || hasGoodVision || isTired)
console.log(hasDriverLicense && hasGoodVision && isTired)

if (hasDriverLicense && !hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive.........");
}

*/




// ************** switch statement 
// this simply does the strict comparison


/*

// break is important with every case
// if break is not used then the case matched will also execute all the code below

const day = "tuesday";


// switch statement
// switch(day){
    //     case "monday":
    //         console.log("Plan the course structure");
    //         console.log("Go to coding meetup");
    //         break;
    //     case 'tuesday':
    //         console.log("Prepare theory video");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("write code examples");
//         break;
//     case 'friday':
//         console.log("Record the video");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break

// }


// if else statement
if (day === "monday") {
    console.log("Plan the course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
    console.log("write code examples");
} else if (day === "friday") {
    console.log("record the videos")
} else if (day === "saturday" || day === 'sunday'){
    console.log("Enjoy the weekend")
}

*/







// ********************** Statement & expression

/*
expression is a piece of code that produces a value
ex: 
3 + 4
true || false
1991

statement is a piece of code that is executed but does not produces a value itself

we write our whole programs as the sequence of actions and these actions are statements

ex : below code is complete statement, as it does not produces any value
if (day === "monday") {
    console.log("Plan the course structure");
}


why we needed to learn the difference between expressions and statements ?
Because, JavaScript is very much strict at places where it want expression and where it want statement.

*/









// ****************** Conditional / Ternary operation

/*
// condition ? true value : false value;
const age = 2;
// age >= 18 ? console.log("I like to drink wine 🍷.") : console.log("I like to drink water 💧.");

const drink = age >= 18 ? "wine 🍷" : "water 💧";

console.log(`Since your age is ${age}, you will be served ${drink}.`)

console.log(`I would like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}.`)
*/









// *******************  excercise

/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
*/

/*
// Solution 
const bill = 1000;

const tip = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
// console.log(tip)

const tipAmount = bill * tip;
// console.log(tipAmount)
const totalBill = bill + tipAmount;

console.log(`The bill was ${bill}, the tip was ${tipAmount}, and the total value ${totalBill}.`);
*/