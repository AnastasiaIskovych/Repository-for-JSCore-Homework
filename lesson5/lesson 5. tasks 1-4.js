/* task - 1
Напишіть функцію testThrow(), яка прийматиме параметр помилка exception і
перевірятиме роботу оператора throw, зокрема той факт, що як об’єкт помилки
можна передати значення будь-якого типу.
Приклад результату:
> testThrow(5);
Caught: 5
> testThrow('Test');
Caught: Test
> testThrow(new Error('An error happened'));
Caught: Error: An error happened */



function testThrow(exception) {
    try {
        throw(exception);
    }
    catch(error){
        console.log("Caught: " + error);
    }
}






/*task - 2
Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина
прямокутника width і висота прямокутника height і обраховує його площу.
Передбачити припинення виконання програми і генерацію винятку у випадку,
якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові
ситуації. */



function calcRectangleArea(width, height) {

    var width = prompt("Enter width", "12"); // не розумію чому коли var заміняю на let вибиває помилка, що змінна вже задекларована
    if (isNaN(width)) {
        throw new TypeError("You've entered not a number");
    }
    if (width <= 0) {
        throw new TypeError("You've entered wrong number");
    }
    var height = prompt("Enter height", "15");
    if (isNaN(height)) {
        throw new TypeError("You've entered not a number");
        }
    if (width <= 0) {
        throw new TypeError("You've entered wrong number");
    }
    else {
    return s = width * height;
    }
}
    
try {
    let result = calcRectangleArea();
    console.log(result);
    
} 
catch (exception) {
    console.log(exception.name);
    console.log(exception.message); 
}





/*task 3
Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і
генерувати в модальному вікні помилки у випадку, коли:
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter
your age”),
- нечислове значення
- вік юзера менше 14 років.
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
Напишіть код, який використовує цю функцію, передбачте обробку можливих
винятків. */



function checkAge() {
    age = prompt("Please, enter your age", "18");
    if (age === "") { // якщо прописую (age === underfined) як умову - не спрацьовує
        throw new Error("You didn't enter your age. Please, tell us your age");
    }
    if (isNaN(age)) {
        throw new Error("You've entered not a number. Please, enter your age");
    }
    if (age < 14) {
        throw new Error("You're too young. Please, come back in a few years");
    }
    alert("Welcome to films.com. Have a look around");
}

try {
    var result = checkAge();
    console.log(result);
      
}
catch(error) {
    alert(error.message)
    console.log(error.name); 
    console.log(error.message);
}


/* task - 4
Створіть клас MonthException, конструктор якого приймає параметр message
і ініціалізує поле name значенням "MonthException".
Реалізуйте функцію showMonthName(month), в якій параметр month – це
порядковий номер місяця в році. Функція повертає назву місяця відповідно до
введеного номера місяця. У випадку некоректного вводу кидається ексепшн у
вигляді об’єкта класу MonthException з повідомленням "Incorrect month number";.
Напишіть код, який використовує цю функцію, передбачте обробку можливих
винятків. 
console.log(showMonthName(14));
MonthException Incorrect month number
*/


class MonthException {
    constructor(message) {
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    var monthsArray = [0,'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  
try {
    if (month > 12 || month < 1 ) {
        throw Error("Incorrect month number");
    }
    if (isNaN(month)) {
        throw Error("Incorrect month number"); 
    }
    else {console.log(monthsArray[month]);}
}
catch(error) {
    alert(MonthException.name + " " + error.message);
}
}

console.log(showMonthName(5));
console.log(showMonthName(14));



