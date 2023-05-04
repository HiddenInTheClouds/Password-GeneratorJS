// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters to be included in password
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "~",
];
// Function to prompt user for password options
function getPasswordOptions() {}
// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
// Function to generate password with user input
function generatePassword() {
  var lengthPassword = parseInt(prompt("What's the length of the password?"));
  //console.log(lengthPassword);
  if (lengthPassword < 8 || lengthPassword > 128) {
    alert("Please choose a password between 8 and 128 characters");
    return null;
  }

  var lowerChar = confirm("Do you want to use lowercase letters?");
  //console.log(lowerChar);
  var upperChar = confirm("Do you want to use uppercase letters?");
  //console.log(upperChar);
  var numChar = confirm("Do you want to use numbers?");
  //console.log(numChar);
  var specialChar = confirm("Do you want to use special characters?");
  //console.log(specialChar);
  // Remove this part?
  if (lengthPassword < 8) {
    alert("Choose a number greater than 8");
  }
  if (lengthPassword > 128) {
    alert("Choose a number less than 128");
  }

  return "Generated password will go here";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. Prompt the user for the password criteria
//    a. Password Length 8 < 128
//    b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3. Generate password based on criteria.
// 4. Display password to the page.

// Display the password

for (let index = 0; index < Array.length; index++) {
  const element = array[index];
}
var pool = [];
