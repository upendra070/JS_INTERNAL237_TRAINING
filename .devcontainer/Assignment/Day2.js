
// 1- sum of two number;

//    const a=10;
//    const b=10;
//    console.log(a+b);

// 2- print "hello <name>";

//     let name ="UPENDRA";
//    console.log(`hello ${name}`);

// 3- even odd check;

// function check( a){
//     if(a%2==0){
//         console.log("This is even number");
//     }
//     else{
//     console.log("This is odd number") 
//     }
// }

// let num=5;
// check(num);


// 4- celius to fahrenheit

// function cToF(c) {
//     let f = (c * 9/5) + 32;
//     return f;
// }

// console.log(cToF(0));   // 32
// console.log(cToF(25));  // 77
// console.log(cToF(100)); // 212


// 5- Max among 3;

// function maxi(a,b,c){
//     if(a>b&&a>c){
//         return c;
//     }
//     else if(b>a&&b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }

//  console.log(maxi(10,12,15));


// 6- Find string length

//   let str = "Hello World";
//   console.log(str.length);

// 7- Toggle boolean

// let isActive = true;

// isActive = !isActive;  
// console.log(isActive); // false

// 8- Concatenate string

// let first = "Hello";
// let second = "World";

// let result = first + " " + second;
// console.log(result); 

// 9- positive  negative zero

// function checkNumber(num) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// checkNumber(10);   // Positive
// checkNumber(-5);   // Negative
// checkNumber(0);    // Zero

 // 10- var let const 

//  let a=10;
//  const b=100;
//  var c=1000;
//  console.log(a,b,c)

 // 11- multiplication table

//    function table(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }

// table(5);

 // 12- Sum of first 10 natural numbers

//  let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// console.log("Sum =", sum);


//13. Switch-case → day name

// function getDayName(day) {
//     switch(day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Invalid day number");
//     }
// }

// getDayName(3);   // Wednesday

// 14. Function → Factorial

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// }

// console.log(factorial(5));  // 120




// 15. Function → Voting eligibility

// function checkVotingEligibility(age) {
//     if (age >= 18) {
//         console.log("You are eligible to vote.");
//     } else {
//         console.log("You are not eligible to vote.");
//     }
// }

// checkVotingEligibility(20);  // eligible
// checkVotingEligibility(16);  // not eligible


// 16. Write a function to check whether a number is prime or not.



//   function isPrime(num) {
//     if (num <= 1) return false;  

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false


// 17. Write a program to print sum of digits of a number. (e.g., 123 → 6)


// function sumOfDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;  
//         sum += digit;          
//         num = Math.floor(num / 10);  
//     }

//     return sum;
// }

// console.log(sumOfDigits(123));  // 6
// console.log(sumOfDigits(987));  // 24




// 18. Write a function to reverse a string without using reverse().

// function reverseString(str) {
//     let rev = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }

//     return rev;
// }

// console.log(reverseString("hello")); // "olleh"



// 19. Take user marks & print Grade using conditions:


// function getGrade(marks) {
//     if (marks >= 90) {
//         console.log("Grade: A");
//     } 
//     else if (marks >= 75) {
//         console.log("Grade: B");
//     } 
//     else if (marks >= 50) {
//         console.log("Grade: C");
//     } 
//     else {
//         console.log("Grade: Fail");
//     }
// }

// getGrade(92);  // A
// getGrade(80);  // B
// getGrade(55);  // C
// getGrade(30);

// 20. Create a function which takes *two numbers & an operator (+, -, , /) and performs
operation.


// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;

//         case '-':
//             return a - b;

//         case '*':
//             return a * b;

//         case '/':
//             if (b === 0) return "Cannot divide by 0";
//             return a / b;

//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calculate(10, 5, '+')); // 15
// console.log(calculate(10, 5, '-')); // 5
// console.log(calculate(10, 5, '*')); // 50
// console.log(calculate(10, 5, '/')); // 2


// 21. Write a function to count vowels in a string.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let ch of str) {
//         if (vowels.includes(ch)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("Upendra"));     // 3



// 22. Print the Fibonacci series up to n terms.

// function fibonacci(n) {
//     let a = 0, b = 1;

//     console.log("Fibonacci Series:");

//     for (let i = 1; i <= n; i++) {
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }

// fibonacci(10);



//23. Write a function that returns minimum and maximum from an array.

// function findMinMax(arr) {
//     if (arr.length === 0) return "Array is empty";

//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }

//     return { min, max };
// }

// let numbers = [10, 5, 20, 8, 30];
// console.log(findMinMax(numbers)); 
// // Output: { min: 5, max: 30 }

//25. Create a function that checks if a number is Armstrong number or not.

// function isArmstrong(num) {
//     let sum = 0;
//     let temp = num;
//     let digits = num.toString().length;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === num;
// }

// console.log(isArmstrong(153));  // true
// console.log(isArmstrong(123));  // false
// console.log(isArmstrong(9474)); // true






