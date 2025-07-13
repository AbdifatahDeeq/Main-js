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

// let car = { Made: "Totoya", Model: "RAV-4", Year: "2024" }

// let { Made , Model }= car

// console.log(`${Made} \n ${Model}`);


//default parameters



// function calculateArea(width, hight = width) {
//      console.log(width * hight)
     
// }
// calculateArea(4, 6)// the output 24
//  calculateArea(7)  //// the output 49


// we can write also like this 

// calculateArea = (width, height = width) => {
//     return width * height
   
// }
// console.log(calculateArea(6, 6))// the output 36
// console.log(calculateArea(6))// the output 36


//Rest and spread operator




   
// const Array1 = [1, 2, 3, 4, 5]
// const Array2 = [...Array1, 6, 7, 8, 9, 10];

// console.log(Array2);



// const A1 = [2, 4, 6, 8, 10]
// const A2 = [... A1, 12, 14, 16, 28, 20]

//  console.log(A2)



// iskudar = (...tirada) => {
//      return tirada.reduce((wadar, tirada) => wadar+tirada,0)
// }
// console.log(iskudar(20, 10, 30))

//Exercise #25

//spread operator
// const Ar1 = [1, 2,  3]
// const Ar2 = [...Ar1, 4, 5, 6]

// console.log(Ar2)

// const mult = (...Result) => {
//    return Result.reduce((num1,num2) => num1 * num2, 1) 
// }
// console.log(mult(10, 3))

// synchronous and Asynchronous

//settimeout

// setTimeout(() =>
// console.log("call me after 4 seconds"), 4000)


// synchronous




// function userData() {
//    alert("Would you like to see the user data, click ok if your answar is yes")
//    return { Name: "Abdalla", ID:"CA7"}
// }

// const user = userData()

// console.log("user data", user)

// console.log("Answar the Alert first")




// function userData(callback) {
//    setTimeout(() => {
//       const user = {
//          Name: "Abdalla", Id: "CA7"
//       }
//       callback(user)
//    },5000)
 
// }

// userData(function (user){
//    console.log(user)
// })
 


//   console.log("welcome to our plattform");

// console.log("wait the user data");

// Promise

// function fetchingUserdata() {
//    return new Promise(( except , reject) => {
//       setTimeout(() => {
//          const success = true;
//          if (success) {
//             except({
//                Name: "Abdalla",
//                Id: "CA7"
//             })
//          }
//          else { reject(" User data is rejected") }
//       },1000)
//    })
// }

// fetchingUserdata()
//   .then((data) => console.log("User data", data))
//    .catch((error) => console.error("Error:", error));
  

//Async And Await
   
// async function userDatadisplay() {
//    try {
//       console.log("Start fetching user data")
//       const user = await fetchingUserdata()
//       console.log("user data", user)
//    }
//    catch (error) {
//       console.log(" there is error whith the user data")
//    }
// }
// userDatadisplay();


// // JSON TO OBJECT
//OBJECT TO JSON

// const userData = {
//    Name: "Abdalla",
//    ID: "BiT11",
//    City: "mugdishu"
   
// }
//  //json to object
// const jsonstring = JSON.stringify(userData);

// console.log(jsonstring)

// //object to json

// const object = JSON.parse(jsonstring);

// console.log(object)


//fetching user data
//Exercise #29 

// async function fetchingDatafromjson() {
//    console.log("starting fetching user data");
//    const respon = await fetch("https://jsonplaceholder.typicode.com/posts");
//    const userData = await respon.json();
//    console.log("Response:", userData[0], userData[2]);
// }
// fetchingDatafromjson(); 


//callback Exercise #30

function operator(a,b, callback) {
   return callback(a, b);
}
const add=(a,b)=> {
   return a + b;
}
const sub = (a, b) => {
   return a - b;
}

const mult = (a, b) => {
   return a * b;
}
const div = (a, b) => {
  return a / b;
};
console.log(operator(7, 6, add));
console.log(operator(7, 6, sub));
console.log(operator(7, 6, mult));
console.log(operator(7, 6, div));



