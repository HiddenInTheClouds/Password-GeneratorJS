// Assignment Code
let generateBtn = document.querySelector("#generate");
// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters to be included in password
let specialCharacters = [
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
  let pool = [];
  let password = "";
  let lengthPassword = parseInt(prompt("What's the length of the password?"));
  //console.log(lengthPassword);
  if (lengthPassword < 8 || lengthPassword > 128) {
    return alert("Please choose a password between 8 and 128 characters");
  }

  let lowerChar = confirm("Do you want to use lowercase letters?");

  let upperChar = confirm("Do you want to use uppercase letters?");

  let numChar = confirm("Do you want to use numbers?");

  let specialChar = confirm("Do you want to use special characters?");
  if (
    lowerChar === false &&
    upperChar === false &&
    numChar === false &&
    specialChar === false
  ) {
    return alert("Please select character type");
  }
  if (lowerChar === true) {
    pool = pool.concat(lowerCasedCharacters);
  }
  if (upperChar === true) {
    pool = pool.concat(upperCasedCharacters);
  }
  if (numChar === true) {
    pool = pool.concat(numericCharacters);
  }
  if (specialChar === true) {
    pool = pool.concat(specialCharacters);
  }
  // Pick from pool randomly
  for (let i = 0; i < lengthPassword; i++) {
    let randomNumber = Math.floor(Math.random() * pool.length);
    let temp = pool[randomNumber];
    console.log(temp);
  }

  return "Generated password will go here";
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
