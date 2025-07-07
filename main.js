// console.log("Hello this is an exercise two for javascript ");

 
// let x = 15;
// let y = "15";
// console.log(x == y)
// console.log(x === y)
// console.log(x != y)
// console.log(x !== y)
// console.log(x > y)
// console.log(x > !y)
// console.log(x < y)
// console.log(x >= y)
// console.log(x<=y)


// let sunny = true;
// let weekend = false;

// console.log(sunny && weekend);
// console.log(sunny || weekend);
// console.log(!sunny);
// console.log(!weekend);

// let firstName = "AD";
// let greating = "Hello";
// greating += " " + firstName;

// greating += " "+ "Good Morning";
//   console.log(greating); 

// Function declaration
// function Name(name) {
//    console.log("Hello " + name);
// }
// Name("Deq")
//  Name("Abdullahi")

// function totalCalculate(price, quantity) {
//   console.log("Total price is:" + price * quantity);
// }
// totalCalculate(10, 5);
// totalCalculate(20, 10);
//  totalCalculate(30, 15); 


// 
// const add = (num1, num2) => {
//     return num1 + num2;
// }
// const sub = (num1, num2) => {
//     return num1 - num2;
// }
// add(19, 10);
// sub(19, 10);  
// console.log(add(19, 10));
//  console.log(sub(19, 10));

//Exercise#9
// let car = {
//     Made:"Germany",
//     Model: "BNW",
//     Year: "2024",
//     start: function () {
//         console.log("The car has started")
//     }
// }
// car.start() //The car has started


//Exercise #10

// let liberary = [
//   {
//     title: "The Laws of Human Nature",
//     outher: "Robert Greene ",
//     years: " 15 Oktober 2018",
//   },
//   {
//     title: "The Myth The Legend",
//     Auther: "Mahatir Mohamed",
//     Year: " 26 Juli 2019",
//   },
// ];
// console.log(liberary[0])
// console.log(liberary[1])

// { The Result
//   title: 'The Myth The Legend',
//   Auther: 'Mahatir Mohamed',
//   Year: ' 26 Juli 2019'
// }
//_______________________________________________________//

//Do while loop

// let password;
// do {
//   password= prompt("Enter your password");
// }
// while (password !== "123456");

 

//     console.log("Exercise #14");
// let number;
// do {
//   number = prompt("Enter a number greater than 10");
// } while (number <= 10);

// console.log("welcome to access");


// let userName;
// let password;
// do {
//   userName = prompt("Enter your user name")
//   password= prompt("Enter your Password")
// }
// while (userName !== "Somaliwayn" || password !== "12345")
  
//   alert("Wellome "+ userName)

// const students = ["Abdifatah", "Abdullahi", "Deq"]

// for (const student of students);
//  console.log(students)

// let people = [
//     {
//         Name: "Abdalla",
//         Age: 30,
//         city: "Göteborg",
//     },
//     {
//         Name: "Farax",
//         Age: 25,
//         city: "Hargeysa",
//     },
// ]

// for (let person of people) {
        
//     console.log(people)
  
//     for (let key in person) {
//          console.log(`  ${key}: ${person[key]}`);
//     }
// }        
    
// const Student = {
//     name: "Abdifatah", Age: 30, City: "mugdishu"
// }

// for (const key in Student) {
//     console.log(`${ key } ${ Student[key]}`)
// }
    
// Exercise #15

// const people = [
//     {
//         Name: "Mohamed", Age: 29, city: "Kismayo",
//     },
//      {
//         Name: "Sadaq", Age: 35, city: "Mugdishu",
//      },
//       {
//           Name: "Jamac", Age: 14, city: "Hargeysa",
//     }
// ]
// console.log(" the value and properties");
// for (const person of people) {
//   console.log("   ---");
//   for (const key in person) {
//     console.log(`  ${key}: ${person[key]}`);
//   }
// }





// If statements
// Exercise #16
 



// let score = 40;
// if (
//     score >= 50
// )
//     console.log(" Congragulations You are passed")

// else {
//     console.log("Sorry you have to do it again")
// }




//if else if statement

// Exercise #17

// let temperature = 8;

// if (temperature <= 0)
// {
//     console.log(" It is the very cold")
// }
     
// else if (temperature <= 15)
// {
//     console.log(" It is cold")
// }
// else if (temperature <= 25){
//     console.log("It is warm")
// }
// else {
//     console.log(" It is hot")
//  }

// const message = temperature >= 10 ? "It is hot" : "Be ready to be cold"
// console.log(message)



//ternary operators
//Exercise #18
  

// const grade = prompt("Enter your grade")
// const massege = grade >= 60 ? "Congragulations you are passed" : " Sorry do it again"
//  alert(massege)

// let fruits = ["Apple", "bannana", "cherry"];
// fruits.forEach((fruit) => {
//     console.log(fruits.length);
// })

//high order arrat function

// Exercise #19
//forEach()
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number)
// });
  


// map()



// let numbers = [1, 2, 3, 4, 5];
// const newNumber = numbers.map((number) =>
// number * 3)
//  console.log(newNumber)

// //Exercise #20
// let fruits = ["Apple", "bannana", "cherry"];
// fruits.map((fruit) => {
//   console.log(fruit.length);
// });

// reduce()

//Exercise #21

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((total, mult) => total * mult, 1);

// console.log(sum)



//Array destructuring 

//Exercise #22

// let colours = ["Red", "Green", "Blue"]
// let [red, green, blue] = colours;
// console.log(red)
// console.log(blue)
 
// console.log("Qaybtan hoosena waa suubis")

// console.log(`${red} and ${blue}`)



//object destruction
// const person = {
//     name: "Abdalla",
//     Age: 25,
//     city: "Wonderland",

// }
// const { name,Age, city } = person;
// console.log(name, Age, city)
 

//Exercise #23

let car = { Made: "Totoya", Model: "RAV-4", Year: "2024" }

let { Made , Model }= car

console.log(`${Made} \n ${Model}`);