//task 1

let x = "1";
let y = "2";
let res1 = x + y;
console.log(res1);
console.log(typeof res1);


let res2 = true + y;
console.log(res2);
console.log(typeof res2);


let res3 = x < y;
console.log(res3);
console.log(typeof res3);


let res4 = (x + "r") * 2;
console.log(res4);
console.log(typeof res4);


//task 2
let number = prompt("Enter the number, please");
console.log(number > 0 && number % 2 == 0); //checking if the number is even & positive
console.log(number % 7 == 0); //checking if the number can be divided by 7 without remainder


//task 3 
let isAdult = confirm("Are you 18+?");
if (isAdult == true) {
    alert("Ви досягли повнолітнього віку");
}  
else {
    let currentAge = prompt("How old are you?");
        if (currentAge < 10) {
            alert("Ви ще занадто молоді");
        }
        else {
            alert("Ви ще не досягли повнолітнього віку");
        }
}



//task 4 - counting square of a triangle
let side1 = prompt("Enter length of the first side of a triangle");
let side1Num = Number(side1); 
    if (isNaN(side1Num) && side1Num <= 0) {
        alert("Incorrect Data");
    }
let side2 = prompt("Enter length of the second side of a triangle");
let side2Num = Number(side2);
    if (isNaN(side2Num) && side2Num <= 0) {
        alert("Incorrect Data"); 
    }
let side3 = prompt("Enter length of the third side of a triangle");
let side3Num = Number(side3);
    if (isNaN(side3Num) && side3Num <= 0) {
    alert("Incorrect Data"); 
    }
let p = 1/2 * (side1Num + side2Num + side3Num);
let s = (p * (p - side1Num) * (p - side2Num) * (p - side3Num)) ** (1/2);
console.log(s.toFixed(2));
if ((side1Num ** 2 + side2Num ** 2 === side3Num ** 2) || (side1Num ** 2 + side3Num ** 2 === side2Num ** 2) || (side2Num ** 2 + side3Num ** 2 === side1Num ** 2)) {
console.log("Трикутник - прямокутний");}
else {
    console.log("Трикутник - непрямокутний");
} 



//task 5. Variant - 1

currentTime = new Date().getHours();
if (currentTime <= 5  && currentTime > 23) {
    alert("Доброї ночі");
}
if (currentTime > 5 && currentTime <= 11) {
    alert("Доброго ранку");
}
if (currentTime > 11 && currentTime <= 17) {
    alert("Доброго дня");
}
else {
    alert("Доброго вечора");
}



// task 5. Variant - 2

let currentTime = new Date().getHours();

switch (currentTime) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("Доброї ночі");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Доброго ранку");
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert("Доброго дня");
        break;
    default:
        alert("Доброго вечора");
}


//task - 6 - working with an array
let taskArray = [45, "Apple", true, null];
console.log(taskArray.length);
let element5 = prompt("Enter 5th element");
taskArray.push(element5);
console.log(taskArray[4]);
