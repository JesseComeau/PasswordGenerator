// Sets generated password to HTML
var passwordText = document.querySelector("#password");
// "Generate Password Button"
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Variables to store paramter responses
var lower = "Y";
var upper = "Y";
var numerals = "Y";
var specialChar = "Y";
var passwordLength = "16";


// Variables storing values to paramteres selected
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeralsList = "0123456789";
var specialList = " !@#$%^&*_-+=";
var variables = [];
var password = "Password Text";

// Initializing function
function writePassword() {
  // Prompt for lower case letters
  function lowerPrompt() {
    lower = prompt(
      "All prompts have a default value of (Y)es and a default length of 16 to generate the most secure password. Please select (N) if you would like to exclude these criteria.\r\rWould you like the password to include lower case letters? (Y/N)",
      "Y"
    );
    if (lower === null) {
      alert("Request cancelled.");
      return;
    }
    if (lower != "Y" && lower != "N" && lower != "y" && lower != "n") {
      alert("Please input Y/N");
      lowerPrompt();
    } else {
      upperPrompt();
    }
  }
  lowerPrompt();

  // Prompt for upper case letters
  function upperPrompt() {
    upper = prompt(
      "Would you like the password to include UPPER case letters? (Y/N)",
      "Y"
    );
    if (upper === null) {
      alert("Request cancelled.");
      return;
    }
    if (upper != "Y" && upper != "N" && upper != "y" && upper != "n") {
      alert("Please input Y/N");
      console.log(upper);
      upperPrompt();
    } else {
      numeralsPrompt();
    }
  }

  // Prompt for numerals
  function numeralsPrompt() {
    numerals = prompt(
      "Would you like the password to include numerals? (Y/N)",
      "Y"
    );
    if (numerals === null) {
      alert("Request cancelled.");
      return;
    }
    if (
      numerals != "Y" &&
      numerals != "N" &&
      numerals != "y" &&
      numerals != "n"
    ) {
      alert("Please input Y/N");
      console.log(numerals);
      numeralsPrompt();
    } else {
      specialCharPrompt();
    }
  }

  // Prompt for special characters
  function specialCharPrompt() {
    specialChar = prompt(
      "Would you like the password to include $pecial Characters? (Y/N)",
      "Y"
    );
    if (specialChar === null) {
      alert("Request cancelled.");
      return;
    }
    if (
      specialChar != "Y" &&
      specialChar != "N" &&
      specialChar != "y" &&
      specialChar != "n"
    ) {
      alert("Please input Y/N");
      console.log(specialChar);
      specialCharPrompt();
    } else {
      validation ();
    }
  }

  // Function to ensure at least one parameter was chosen
  function validation () {
  var results = [lower, upper, numerals, specialChar];
  var resultsValidation = results.includes("Y");
  if (results.includes)
    if (!resultsValidation) {
      alert(
        "Please choose at least one selection lower, upper, numerals, or special characters."
      );
      writePassword();
    }
    else {
      lengthPrompt()
    }
  }

  // Prompt for length of requested password
  function lengthPrompt() {
    const min = 8;
    const max = 128;
    passwordLength = prompt("How long should your password be? (8-128)", "16");
    if (passwordLength === null) {
      alert("Request cancelled.");
      return;
    }

    if (passwordLength < min) {
      alert("Please input a value between 8 and 128");
      lengthPrompt();
    } 
    if (passwordLength > max) {
      alert("Please input a value between 8 and 128");
      lengthPrompt();
    } 
    else {
      confirmation();
    }
  }

  // Confirmation prompt of all requested parameters and subsequent generation of a split array to randomly choose characters from.
  function confirmation() {
    var conf = confirm(
      `Lower Case: ${lower}\rUpper Case: ${upper}\rNumerals: ${numerals}\rSpecial Characters: ${specialChar}\rLength: ${passwordLength}`
    );
    if (conf == false) {
      alert("Request cancelled.");
      return;
    }
    if (conf) {
      var password = generatePasswordArray();

      function generatePasswordArray() {
        if (lower == "Y") {
          variables += lowerLetters;
          // console.log(`lower: y`, variables);
        }
        if (upper == "Y") {
          variables += upperLetters;
          // console.log(`Upper: y`, variables);
        }
        if (numerals == "Y") {
          variables += numeralsList;
          // console.log(`numerals: y`, variables);
        }
        if (specialChar == "Y") {
          variables += specialList;
          // console.log(`special char: y`, variables);
        }
      }
      var variableSplit = variables.split("");
      console.log(variableSplit);
      console.log(password);
      password = "";
    }
    generatePassword();

    // Utilizes array generated by parameters to loop for password generation
    function generatePassword() {
      for (let index = 0; index < passwordLength; index++) {
        var random = Math.floor(Math.random() * variableSplit.length);

        password += variableSplit[random];
        passwordText.value = password;
      }
      variables = "";
    }
  }
}
