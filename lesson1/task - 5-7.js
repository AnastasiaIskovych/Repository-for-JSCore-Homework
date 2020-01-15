/* task #5 - working with types of variables*/

var firstName;
var familyName;
var studingGroup;
var birthYear;
firstName = "Anastasia";
familyName = "Iskovych";
studingGroup = "JavaScript Core"
birthYear = 1996;
var maritalStatus = false;
console.log(typeof firstName);
console.log(typeof familyName);
console.log(typeof studingGroup);
console.log(typeof birthYear);
console.log(typeof maritalStatus);
console.log(maritalStatus, birthYear, firstName, familyName, studingGroup);
var placeOfBirth = null;
var numberOfChildren; 
console.log(typeof placeOfBirth);
console.log(typeof numberOfChildren);

/*task #6 - working with prompt() function */
var login = prompt("What is your login?", "Sam_Smith");
var email = prompt("What is your email?", "sam.smith@gmail.com");
var password = prompt("What is your password?", "123456");
alert("Dear " + login + ", here is you email address: " + email +" and password: " + password);

/*task #7 - counting number of seconds in 1 hour/24hours/a month */
var second = 1;
var minute = 60 * second;
var hour = 60 * minute;
var hours24 = 24 * hour;
var month = 30 * hours24;
alert("In 1 hour - " + hour + " seconds. In 24 hours - " + hours24 +" seconds. In 1 month - " + month +" seconds.");