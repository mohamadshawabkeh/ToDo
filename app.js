"use strict"

var userName= prompt('Please enter your name'); 
var userGender = prompt("Please enter your gender (male or female):");
var userAge = parseInt(prompt('Please enter your age:'));
var skipMessage = confirm("Do you want to skip the welcoming message?");

if (userGender == "male") {
  alert('welcome to To Do List website Mr '+ userName);
} else if (userGender == "female") {
  alert ('welcome to To Do List website Ms ' + userName);
} else if (userGender == " ") {
  userGender="invalid";    // If the input was empty consider the answer to be an "invalid" string.
} else {     
 alert ('welcome to To Do List website');


}

while (true) {               // you have to check the age is not less than 0
  if (userAge > 0) {
    break; 
  }
  alert('Invalid age! Please enter a the right age.');
  userAge = parseInt(prompt('Please enter your age:'))
}

var excited= prompt("Are you excited to try our website? (Yes/No)");
if (excited ===""){
  console.log("invalid");
} else {
  console.log(excited);
}
var contact= prompt("Do you have an email to contact? (Yes/No)");
if (contact ===""){
  console.log("invalid");
} else {
  console.log(contact);
}
var colorDes= prompt("Do you prefer colorful design? (Yes/No)");
if (colorDes ===""){
  console.log("invalid");
} else {
  console.log(colorDes);
}

const answers=[userName,userGender,userAge,excited,contact,colorDes];
for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}




