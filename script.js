var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let characters = " ";
  
  if(lowercase){
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

  if(uppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXY"
  }

  if(numbers){
    characters += "0123456789"
  }

  if(specialchar){
    characters += "!@#$%^&*()_+:"
  }

  let passwordArray = [];


  //* 1. Prompt the user for the password criteria
  //*   a. Password lengh between 8 < 128
  //*   b. Lowercase, Uppercase, Numbers, Special Characters
  //* 2. Validate the input
  //* 3. Generate password based on criteria
  
  //* 4. Display the generated password on the page
  return "Password will go here!"
}

//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//* Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
