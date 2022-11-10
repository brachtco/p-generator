//Create Variables

var characterLength = 8;
var choiceArr = [];


var lowercaseArr = ["a "," b","c ","d ","e ","f ","g ","h ","i ","j ","k ","l ","m ","n ","o ","p ","q ","r ","s ","t ","u ","v ","w ","x ","y ","z "];
var uppercaseArr = ["A ","B ","C ","D ","E ","F ","G ","H ","I ","J ","K ","L ","M ","N ","O ","P ","Q "," R","S ","T ","U ","V ","W ","X ","Y "," Z"];
var numberArr = [" 0","1 ","2 ","3 ","4 ","5 ","6 ","7 "," 8","9 "];
var specialCharArr = [" !"," @","# ","$ ","% ","^ ","& ","* ",];

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();

    if (correctPrompts) {

        var newPassword = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = newPassword;
    }
}

// Write function using for loop and Math.random to generate the password
function generatePassword() {

  var password = "";
  for (var i = 0; i < characterLength; i++) {
      var index = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[index];
  }
  return password;
}
//Wrire function to bring up the prompts and append the arrays
function getPrompts() {
  characterLength = (window.prompt("How many characters do you want your password to be? Please chose a number between 8 - 128"));

  if (characterLength < 8 || characterLength > 128) {
      alert("Please eneter a number between 8 - 128");
      return false;
  }

  if (confirm("Would you like lowercase letters in your password?")); {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  
  if (confirm("Would you like uppercase letters in your password?")); {
    choiceArr = choiceArr.concat(uppercaseArr);
  }

  if (confirm("Would you like numbers in your password?")); {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (confirm("Would you like special characters in your password?")); {
    choiceArr = choiceArr.concat(specialCharArr);
  }
    return true;
}
