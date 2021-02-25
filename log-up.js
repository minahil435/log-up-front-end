const getInput = require("./get-input.js");
const {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
} = require("./main.js");

// The code immediately above grabs the functions you'll
// need for this front-end code. Remember that you
// already have the back-end logic.
// (Check out main.js if you don't believe me!)

// Your job is just to make a user interface for it,
// getting the user's input from `getInput`, feeding it
// to the four back-end functions we're requiring in
// below, and then console.logging the right message.

// App Workflow:

// We'll be running our code as users by typing in
// `node [path to this file]` on the command line,
// followed by our email address and our password.
// (Or the email and pw we want to test!)
// We want to perform checks on that email and
// password to arrive at one of the following messages
// for the user:

// 1. If the email belongs to one of our registered
// users AND the password matches that user, tell them
// that they are logged in.

// 2. If the email belongs to one of our registered
// users but the password does not match that user,
// tell them their password is incorrect.

// 3. If the email does not belong to one of our
// registered users, and the email and password are
// both valid, tell them they're signed up.

// 4. If the email does not belong to one of our
// registered users, and the email is not valid,
// tell them their email is not valid. Preferably
// also tell them what makes a valid email.

// 5. If the email does not belong to one of our
// registered users, and the password is not valid,
// tell them their password is not valid. Preferably
// also tell them what makes a valid password.

// As long as given those inputs you get the right
// outputs, how your branching `if` logic works is
// up to you!

// Remember to test (using command-line calls to your
// app) each of those possibilities!

// You can and should use all four back-end functions
// from the first part of this assignment.

// Being sure to do all that's outlined above, write
// your code below!


const email = getInput(1);
const password = getInput(2);

if (isRegisteredUser(email)) {
  if (passwordMatches(email, password)) {
    console.log("You are logged in.");
  }
  else {
    console.log("Password is incorrect");
  }
}
else if (isValidPassword(password)) {
  if (isValidEmail(email)) {
    console.log("signed up.")
  }
  else  {
    console.log("Email is not valid. The email id must ends with @codeimmersives.com and it should have at least one character before that.");
  }
}
else{
  if ((isValidPassword(password))) 
  {
    console.log("Email is not valid. The email id must ends with @codeimmersives.com and it should have at least one character before that.");
  }
  console.log("Password is not valid. There should be at least 8 characters with a lower case and upper case letter");
}



