/* task 1
1. Заданий масив з елементами [2, 3, 4, 5].
За допомогою циклу for знайдіть добуток елементів цього масиву. Реалізуйте завдання через while.*/

var mult = 1;
let numArray = [2, 3, 4, 5];
for (let i = 0; i < numArray.length; i++) {
    mult = mult * numArray[i];
} 
console.log(mult); 



var numArray = [2, 3, 4, 5];
var i = 0;
var multiplication = 1;
while (i < 4) {
    multiplication = multiplication * numArray[i];
    i++;
}
console.log(multiplication);



/* task 2
Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної
ітерації він перевірятиме, чи є поточне число парним чи непарним, і
відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" */


for (var i = 0; i <= 15; i++) {
    var check = i % 2;
    if (check === 0) {
        console.log(i + " is even");
    }
        else {
            console.log(i + " is odd");
        }
}



/*task 3
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими
цілими числами. Випадкові числа генеруються із діапазону 1-500.
Sample Output:
randArray(5); // 399,310,232,379,40 */


var randomArray = [];
function randArray(k) {
    while (randomArray.length < k) {
        randomArray.push(Math.floor((Math.random() * 500) + 1));
    }
}
randArray();
randomArray;


//task 4
/* Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення
числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати
інтерфейс введення чисел a, b з клавіатури.
Sample Output:
raiseToDegree(3, 4); // 81 */ 

function raiseToDegree(a,b) {
    var a = prompt("Enter the first number");
    var a = Number(a);
        while (Number.isInteger(a) === false) {
            alert("A number should be an integer");
            var a = prompt("Enter the first number");
            var a = Number(a);
        }
    var b = prompt("Enter the second number");
    var b = Number(b);
    while (Number.isInteger(b) === false) {
        alert("A number should be an integer");
        var b = prompt("Enter the second number");
        var b = Number(b);
    }
    alert(a ** b);
}
raiseToDegree();



//task 5
/* Напишіть функцію, яка повертає останній елемент масиву. Функція може
приймати 2 параметри: 1-ий масив, 2-ий числовий параметр, що відповідає
кількості 'x' останніх елементів масиву, які треба вивести.
Sample Output:
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5],2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5],8)); // [3, 4, 10, -5] */


function lastElement(numArray, x) {
    if (x === undefined) {
        console.log(numArray[numArray.length - 1]);
    }
    else if (x > 0 && x <= numArray.length) {
        console.log(numArray.slice(numArray.length - x));
    }
    else if (x > numArray.length) {
        console.log(numArray);
    return undefined;
    }
}
lastElement();


/* 6. Напишіть функцію, яка приймає рядок як параметр і перетворює першу
букву кожного слова рядка в великий регістр.
Input string: "i love java script"
Output string: "I Love Java Script" */

function capFirstLetters(fullString) {
    var splitString = fullString.split(" ");
    var capitalizedArr = splitString.map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    var capitalizedString = capitalizedArr.join(" ");
    console.log(capitalizedString);
}
capFirstLetters();
