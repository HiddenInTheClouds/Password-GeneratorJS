// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password Values
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = ["1234567890"];
const specialchar = ["!@#$%^&*()_+"];

function generatePassword() {
  console.log("Hey! You clicked the button!");

  // 1. Prompt the user for the password criteria
  //    a. Password Length 8 < 128
  //    b. Lowercase, uppercase, numbers, special characters
  let lowercase = confirm("Do you want to use lowercase letters?");
  let uppercase = confirm("Do you want to use uppercase letters?");
  let numbers = confirm("Do you want to use numbers?");
  let specialchar = confirm("Do you want to use special characters?");
  let passwordLength = confirm;
  if (x <= 8 || x >= 128) {
    Return;
  }

  // 2. Validate the input.
  // 3. Generate password based on criteria.
  // 4. Display password to the page.
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
