// 1- Student Marks – Calculate Average Using reduce()

// let marks = [80, 90, 70, 85, 95];

// // Calculate sum using reduce
// let sum = marks.reduce((acc, curr) => acc + curr, 0);

// // Calculate average
// let average = sum / marks.length;

// console.log("Average Marks:", average); 


// 2- Filter Even Numbers

// let numbers = [1,2,3,4,5,6,7,8,9];

// // Filter even numbers
// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log("Even Numbers:", evenNumbers); // Output: [2,4,6,8]




// 3-Shopping Cart – Total Bill


// let cart = { 
//     item: "Laptop", 
//     price: 45000, 
//     quantity: 2 
// };

// // Calculate total
// let totalBill = cart.price * cart.quantity;

// console.log(`Total Bill for ${cart.quantity} ${cart.item}(s):`, totalBill); // Output: 90000




// 4- Movie List – Add, Remove, Print

// let movies = ["Inception", "Avatar", "Titanic"];

// // Add one movie
// movies.push("Interstellar");

// // Remove last movie
// movies.pop();

// // Print final list
// console.log("Final Movie List:");
// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }
/* Output:
Final Movie List:
Inception
Avatar
Titanic
*/


// 5- User Profile JSON – Convert to JSON and Back

// let user = {name:"Aman", age:21, course:"JS"};

// // Convert to JSON string
// let userJSON = JSON.stringify(user);
// console.log("JSON String:", userJSON); // Output: '{"name":"Aman","age":21,"course":"JS"}'

// // Convert back to object
// let userObj = JSON.parse(userJSON);
// console.log("Object:", userObj); // Output: { name: 'Aman', age: 21, course: 'JS' }



// 6- Find Max Number Without Built-in Function


// let arr = [10, 40, 25, 80, 15];

// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log("Maximum Number:", max); // Output: 80



// 7-Transform Names Using map()

let names = ["ram","shyam","mohan"];

// Convert to uppercase
let upperNames = names.map(name => name.toUpperCase());

console.log("Transformed Names:", upperNames); // Output: ["RAM","SHYAM","MOHAN"]


