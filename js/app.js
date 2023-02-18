// Don't forget prompt() always returns a string, even for numbers
const number = prompt("Enter a number: ");

// Step 1: Rearrange the console logs so that the statements are correct

if (2 > 5 ) {
  
  console.log("2" > 5); // false
  
} else if (number > 0 && number < 101) {
  
  console.log("4 > 1"); // true
  
} else if ("3" > 10) { // false
  
  console.log("The number is greater than 100");
  
} else {
  
  console.log("10" > 4 ); // true

}

// Step 2: Test and refactor your code to ensure these conditional statements are operating correctly
// Don't forget to test zero!
// Hint: Remember that numbers can also be strings.