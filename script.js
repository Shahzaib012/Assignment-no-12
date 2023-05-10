// Strings ...............
// Question No 1 .....................
// let a = "This is my car";
// console.log("Length of string",a.length);

// Question No 2 .....................
// let string1 = "This is string one";
// let string2 = "This is string Two";
// console.log("Concatination =",string1 + string2);

// Question No 3..................
// let b = "This is Uppercase";
// console.log(b.toUpperCase());

// question NO 4..................
// let b =  "ThIS IS LOWER CASE";
// console.log(b.toLowerCase());

// question No 5.....................

// let string = "this string that contain this";
// let substring= "that";
// if (string.includes(substring)){
//     console.log('the string' , string,' contains the substring'  ,substring );
// }
//     else{  console.log('the string' , string,' not contains the substring'  ,substring );
// }

// question no 6.............................
// let string = "Hello, world!";
// let char = "w";

// let index = string.indexOf(char);

// if (index !== -1) {
//     console.log('the index of ',char, 'in' ,string, 'is' ,index);
  
// } else {
//     console.log('the  ',char, 'is not found in' ,string);
// }

// question no 7 ...............

// let originalString = "The quick brown fox jumps over the lazy dog.";
// let oldSubstring = "fox";
// let newSubstring = "cat";

// let newString = originalString.replace(oldSubstring, newSubstring);

// console.log(newString); // Output: "The quick brown cat jumps over the lazy dog."


// question no 8.........................
// let originalString = "  Hello, world!   ";
// let trimmedString = originalString.trim();

// console.log(trimmedString); // Output: "Hello, world!"

// question 9.............
// let originalString = "The quick brown cat jumps over the lazy dog.";
// let separator = " ";

// let splitArray = originalString.split(separator);

// console.log(splitArray); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// question no 10....................
// let originalString = "Hello, world!";
// let reversedString = originalString.split("").reverse().join("");

// console.log(reversedString); // Output: "!dlrow ,olleH"

                               // Numbers .................................
// Question no 1
// let a = 2;
// let b = 3;
// let c= a +b;
// console.log("Sum of two numbers =",c);

// Q no 2.........
// let a = 2;
// let b = 3;
// let c= a -b;
// console.log("Differnce of two numbers =",c);

// Q no 3.........
// let a = 2;
// let b = 3;
// let c= a *b;
// console.log("product of two numbers =",c);

// Q no 4.........
// const num1 = 10;
// const num2 = 3;
// const remainder = num1 % num2;
// console.log(remainder); 

// Qoutionet.....
// const num1 = 10;
// const num2 = 3;
// const quotient = num1 / num2;
// console.log(quotient); 

// question no 5......
// const num = 3.2;
// const roundedNum = Math.round(num);
// console.log(roundedNum); 

// q no 6....
// const randomNum = Math.random();
// console.log(randomNum); 

// q no 7.........
// const num1 = 10;
// const num2 = 5;
// const num3 = 8;
// const maxNum = Math.max(num1, num2, num3);
// const minNum = Math.min(num1, num2, num3);
// console.log('the minimum of', num1, num2, num3, "is" ,minNum);
// console.log('the minimum of', num1, num2, num3, "is" ,maxNum);

// q No 8.....
// const num = 25;
// const squareRoot = Math.sqrt(num);
// console.log('The square root of', num, 'is', squareRoot);

// q No 9........
// const num = -10;
// const absValue = Math.abs(num);
// console.log('The absolute value of', num ,'is', absValue);

// Q NO 10........
// let base = 2;
// let exponent = 3;
// let result = Math.pow( base, exponent);
// console.log( base,' raised to the power of' ,exponent ,' is' ,result);



                     // Date Methods............
// Q NO 1.......
// let currentDate = new Date();
// console.log('The current date and time is', currentDate);

// Q 2 .........
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// console.log('The current year is:',currentYear);

// q no 3..
// const currentDate = new Date();
// const currentMonth = currentDate.getMonth();
// console.log('The current month is: ',currentMonth);


// let currentDate = new Date();
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = months[currentDate.getMonth()];
// console.log('The current month is: ',currentMonth);

// q no 4........
// const currentDate = new Date();
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
// console.log('The current day of the week is: ',currentDayOfWeek);

// q 5 ...........
// let startDate = new Date("2023-05-03");
// let numberOfDaysToAdd = 10;
// let endDate = new Date(startDate);
// endDate.setDate(startDate.getDate() + numberOfDaysToAdd);
// console.log('The new date is: ',endDate);

// q 6 .........
// let startDate = new Date("2023-05-03");
// let numberOfDaysToSubtract = 10;
// let endDate = new Date(startDate);
// endDate.setDate(startDate.getDate() - numberOfDaysToSubtract);
// console.log('The new date is: ',endDate);

// q 7 .........
// let currentTimeInMilliseconds = new Date().getTime();
// console.log('The current time in milliseconds is: ',currentTimeInMilliseconds);

// q 8,......
// const currentDate = new Date();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// console.log('The current time is:', hours,':',minutes,':',seconds);

// q 9 .......
// const year = 2023;
// const month = 11; // December (0-indexed)
// const day = 25;
// const christmas = new Date(year, month, day);
// console.log('Christmas is on ',christmas.toDateString());

// Q no 10......
// const date1 = new Date('2022-12-31');
// const date2 = new Date('2022-12-31');
// if (date1 < date2) {
//   console.log(`${date1.toDateString()} is before ${date2.toDateString()}`);
// } else if (date1 > date2) {
//   console.log(`${date1.toDateString()} is after ${date2.toDateString()}`);
// } else {
//   console.log(`${date1.toDateString()} is the same as ${date2.toDateString()}`);
// }

                          // Math Methods..
//   Question No 1..
// const num = -42;
// const absNum = Math.abs(num);
// console.log(absNum); 

// Q 2 .........
// const numbers = [10, 42, -5, 100, 0];
// const highest = Math.max(...numbers);
// console.log(highest); 

// q 3.....
// const numbers = [10, 42, -5, 100, 0];
// const lowest = Math.min(...numbers);
// console.log(lowest); 

// q 4 ........
// const num = 3.14;
// const roundedUp = Math.ceil(num);
// console.log(roundedUp); 


// q 5....
// const num = 3.14;
// const roundedDown = Math.floor(num);
// console.log(roundedDown); 

// q 6.
// const base = 2;
// const exponent = 3;
// const result = Math.exp(exponent * Math.log(base));
// console.log(result); 

// Q 7.
// const num = 10;
// const result = Math.log(num);
// console.log(result);

// Q 8 .....
// const angleInRadians = Math.PI / 4; // 45 degrees in radians
// const result = Math.sin(angleInRadians);
// console.log(result); // Output: 0.7071067811865475

// q no 9................
// const angleInRadians = Math.PI / 5; 
// const result = Math.cos(angleInRadians);
// console.log(result);

// q 10........
// const num = 25;
// const squareRoot = Math.sqrt(num);
// console.log('The square root of', num, 'is', squareRoot);

                                      // For Loop....................
                                    //   Question NO 1...
                                    // for (let i = 1; i <= 10; i++) {
                                    //     console.log(i);
                                    //   };
// Q 2....
// const arr = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

//   Q 3......
// const num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     console.log(i);
//   factorial *= i;
// }

// console.log('The factorial of ',num, 'is ',factorial);

// q 4..........
// let num = 5;

// for (let i = 1; i <= 10; i++) {
//   let product = i * num;
//   console.log(num +'x' +i+'= '+product);
// };

// q 10.........
// let sum = 0;

// for (let i = 2; i <= 100; i += 2) {
//   sum += i;
// }

// console.log('The sum of all even numbers from 1 to 100 is = '+ sum);

// ................................................// while Loop................
// Question No 1....
// let num = parseInt(prompt("Enter a number: "));
// let i = 1;

// while (i <= num) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// };

// q 2.........
// let num = parseInt(prompt("Enter a number: "));
// let i = 1;

// while (i <= 10) {
//     console.log(num +'x'+i+'='+ num *i);
  
//   i++;
// };

// Q NO 3.
// Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// // Ask the user to guess the number
// let guess = parseInt(prompt("Guess a number between 1 and 100"));

// // Keep asking the user for guesses until they get the number
// while (guess !== randomNumber) {
//   if (guess < randomNumber) {
//     guess = parseInt(prompt("Too low. Guess again:"));
//   } else {
//     guess = parseInt(prompt("Too high. Guess again:"));
//   }
// }

// // If the user guessed the number, congratulate them!
// alert(`Congratulations! The number was ${randomNumber}.`);

// q 4......
// let word = prompt("Enter a word:");
// let reversed = "";

// let i = word.length - 1;
// while (i >= 0) {
//   reversed += word[i];
//   i--;
// }

// console.log("The reversed word is:", reversed);

// q 5..........
// let sum = 0;
// let count = 0;

// // prompt user for input
// let input = prompt("Enter a number (or 'done' to finish):");

// // keep asking for input until 'done' is entered
// while (input !== "done") {
//   // parse input as a number
//   let num = parseFloat(input);

//   // check if input is a valid number
//   if (!isNaN(num)) {
//     // add number to sum
//     sum += num;
//     // increment count
//     count++;
//   }

//   // prompt user for next input
//   input = prompt("Enter a number (or 'done' to finish):");
// }

// // calculate average
// let avg = sum / count;

// // output results
// console.log(`Sum: ${sum}`);
// console.log(`Average: ${avg}`);

                                                          // Do While Loop........
// q no 1.......
// const correctPassword = "password123";  // Replace this with the actual correct password

// let password;

// do {
//     password = prompt("Enter the password:");
//     if (password !== correctPassword) {
//         alert("Incorrect password. Please try again.");
//     }
// } while (password !== correctPassword);

// alert("Access granted.");

// Q 2....
// let num = parseInt(prompt("Enter a number:"));

// do {
//     console.log(num);
//     num--;
// } while (num >= 1);

// q 3.........
// let playAgain = true;

// do {
//     // Generate random number between 1 and 100
//     const randomNumber = Math.floor(Math.random() * 100) + 1;

//     let guess;
//     let attempts = 0;

//     do {
//         guess = parseInt(prompt("Guess a number between 1 and 100:"));
//         attempts++;

//         if (guess < randomNumber) {
//             alert("Too low! Guess again.");
//         } else if (guess > randomNumber) {
//             alert("Too high! Guess again.");
//         } else {
//             alert(`You got it in ${attempts} attempts!`);
//         }
//     } while (guess !== randomNumber);

//     // Ask the user if they want to play again
//     const response = prompt("Do you want to play again? (y/n)").toLowerCase();
//     playAgain = response === "y" || response === "yes";
// } while (playAgain);

// q 4...
// let largestNumber = -Infinity;
// let num;

// do {
//     num = parseInt(prompt("Enter a number:"));
//     if (num > largestNumber) {
//         largestNumber = num;
//     }
// } while (num >= 0);

// console.log(`The largest number entered was ${largestNumber}.`);

// Q No 5.......
// const words = [];

// let word;

// do {
//     word = prompt("Enter a word:");
//     if (word !== "stop") {
//         words.push(word);
//     }
// } while (word !== "stop");

// console.log("Words entered in reverse order:");
// for (let i = words.length - 1; i >= 0; i--) {
//     console.log(words[i]);
// }



// Switch Case .....................
// Question No 1.........
// const day = new Date().getDay();
// let dayName;

// switch (day) {
//     case 0:
//         dayName = "Sunday";
//         break;
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     default:
//         dayName = "Unknown day";
// }

// console.log(`Today is ${dayName}.`);


// Q no 2.
// const month = 2; // Replace with the month you want to check

// let days;

// switch (month) {
//     case 1: // January
//     case 3: // March
//     case 5: // May
//     case 7: // July
//     case 8: // August
//     case 10: // October
//     case 12: // December
//         days = 31;
//         break;
//     case 4: // April
//     case 6: // June
//     case 9: // September
//     case 11: // November
//         days = 30;
//         break;
//     case 2: // February
//         const year = new Date().getFullYear();
//         if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//             days = 29; // Leap year
//         } else {
//             days = 28; // Non-leap year
//         }
//         break;
//     default:
//         console.log("Invalid month number.");
// }

// if (days) {
//     console.log(`The month of ${month} has ${days} days.`);
// }

// q no 3.
// const alphabet = "a"; // Replace with the alphabet you want to check

// let result;

// switch (alphabet) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         result = "vowel";
//         break;
//     case "b":
//     case "c":
//     case "d":
//     case "f":
//     case "g":
//     case "h":
//     case "j":
//     case "k":
//     case "l":
//     case "m":
//     case "n":
//     case "p":
//     case "q":
//     case "r":
//     case "s":
//     case "t":
//     case "v":
//     case "w":
//     case "x":
//     case "y":
//     case "z":
//         result = "consonant";
//         break;
//     default:
//         console.log("Invalid alphabet.");
// }

// if (result) {
//     console.log(`The alphabet ${alphabet} is a ${result}.`);
// };

// q no 4........
// const num1 = 10; // Replace with the first number
// const num2 = 20; // Replace with the second number

// let result;

// switch (true) {
//     case (num1 > num2):
//         result = num1;
//         break;
//     case (num2 > num1):
//         result = num2;
//         break;
//     default:
//         console.log("The numbers are equal.");
// }

// if (result) {
//     console.log(`The maximum number is ${result}.`);
// };

// Q no 5...
// const num = 5; // Replace with the number you want to check

// let result;

// switch (num % 2) {
//     case 0:
//         result = "even";
//         break;
//     case 1:
//         result = "odd";
//         break;
//     default:
//         console.log("Invalid number.");
// }

// if (result) {
//     console.log(`The number ${num} is ${result}.`);
// };

// Q no 6.
// const num = 10; // Replace with the number you want to check

// let result;

// switch (Math.sign(num)) {
//     case 1:
//         result = "positive";
//         break;
//     case -1:
//         result = "negative";
//         break;
//     case 0:
//         result = "zero";
//         break;
//     default:
//         console.log("Invalid number.");
// }

// if (result) {
//     console.log(`The number ${num} is ${result}.`);
// };

