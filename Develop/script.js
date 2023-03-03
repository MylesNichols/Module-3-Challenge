// Assignment code here
var keys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()-_=+{[]}'/,<.>/?",
};

// Arrays that will return a random Character
var characters = [
function() {
  return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
},
function() {
  return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
},
function() {
  return keys.numbers[Math.floor(Math.random() * keys.numbers.length)];
},
function() {
  return keys.special[Math.floor(Math.random() * keys.special.length)];
}
];
// Creates the Prompts to generate the password criteria
function  passwordCriteria() {
  var length = parseInt(prompt("How many characters would you like your password to be? (Must be greater than 8 but less than 128 characters)"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("password length does not meet criteria");
    return passwordCriteria();
  }

    var lowercase = confirm("Would you like to include lowercase letters in your password?");
    var uppercase = confirm("Would you like to include uppercase letters in your password?");
    var numbers = confirm("Would you like to include numbers in your password?");
    var special = confirm("Would you like to include special characters in your password?");

    if (!lowercase && !uppercase && !numbers && !special) {
      alert("You must select at least one character type");
      return passwordCriteria();
    }

    return {
      length: length,
      lowercase: lowercase,
      uppercase: uppercase,
      numbers: numbers,
      special: special
    };
}  

// Function that generates password
function generatePassword(criteria) {
  var password = "";
  var possibleChars = "";
  
  if (criteria.lowercase) {
    possibleChars += keys.lowercase
  }

  if (criteria.uppercase) {
    possibleChars += keys.uppercase
  }

  if (criteria.numbers) {
    possibleChars += keys.numbers
  }

  if (criteria.special) {
    possibleChars += keys.special
  }

  for (var i = 0; i < criteria.length; i++) {
    var randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    password += randomChar;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
 var criteria = passwordCriteria();
 var password = generatePassword(criteria);

 var passwordText = document.querySelector("#password");
 passwordText.value = password;
  };


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
