// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword();
var passwordLength = 12;
var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = ""; {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * characters.length);
  password += writePassword.substring(randomNumber, randomNumber +1);
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
