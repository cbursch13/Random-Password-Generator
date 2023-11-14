var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharArray =  ["@", "#", "!", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", ":", ";", "<", ">", "?"];

 var resultArray = [];
 var userArray = [];

 var numCharacter = prompt ("How many characters do you want in your password? between 8 and 128");
 var uppercase = confirm ("Do you want uppercase letters in your password?");
 var lowercase = confirm ("Do you want lowercase letters in your password?");
 var numbers = confirm ("Do you want numbers in your passsword?");
 var special = confirm ("Do you want special characters in your password?");

if (uppercase){
  resultArray = resultArray.concat(upperCaseArray);
}

if (lowercase){
  resultArray = resultArray.concat(lowerCaseArray);
}

if (numbers){
  resultArray = resultArray.concat(numberArray);
}

if (special){
  resultArray = resultArray.concat(specialCharArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {

  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);

}

return userArray.join("") ;
}

//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//* Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
