"use strict";

var userName= prompt('Please enter your name'); 
var userGender = prompt("Please enter your gender (male or female):");
var userAge = parseInt(prompt('Please enter your age:'));
var skipMessage = confirm("Do you want to skip the welcoming message?");

if (userGender !== "male" && userGender !== "female") {
  userGender = prompt("Invalid input. The answer should be 'male' or 'female':");
}

if (userAge <=0 ) {
     alert('Please enter your right age')
     prompt('Please enter your age:')
}

if (userGender = 'male') {
    alert('welcome to To Do List website Mr '+ userName);
} else if (userGender = 'female') {
    alert ('welcome to To Do List website Ms jack' + userName);

} else {
   alert ('welcome to To Do List website')
}


