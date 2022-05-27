// -------- Anoymous Functions and Functions as Parameters ------------
// let show = function() {
//     console.log('Anonymous function');
// };

// function hello(){
//   console.log("hello");
// }

// show();

// function theresAFunctionInThisParameter(name, extraFunction){
//   console.log(`hi there, ${name}`);
//   // extraFunction();
//   console.log(extraFunction);
//   console.log('------');
//   extraFunction();
//   console.log('------')
// }

// theresAFunctionInThisParameter("christian", hello);

// console.log(typeof show);






// -------- Books example of Anonymous Functions and Functions as Parameters ---------


// const input = require('readline-sync');

// function getValidInput(prompt, isValid) {

//    let userInput = input.question(prompt);

//    while (!isValid(userInput)) {
//       console.log("Invalid input. Try again.");
//       userInput = input.question(prompt);
//    }

//    return userInput;
// } // function declaration

// let isValidPassword = function(password) {

//    // Passwords should have at least 8 characters
//    if (password.length < 8) {
//       return false;
//    }

//    return true;
// }; // initialization of an anonymous function

// console.log(getValidInput('Create a password:', isValidPassword));
