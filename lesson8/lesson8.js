// task - 1
/* 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character */

function upperCase(string) {
    if (/^[A-Z]/.test(string)) {
        console.log("String starts with uppercase character")
    }
    else {
        console.log("String does not start with uppercase character")
    }
}
upperCase('regexp');
upperCase('RegExp');








//task - 2
/*
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх
відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail(Qmail2@gmail.com); 
true */

function checkEmail(string) {
 if ((/@/.test(string) && (/\./.test(string)))) {
    return true;
 }
 else{
    return false;
 }
}
checkEmail("Qmail2@gmail.com");






//task - 3
/*
Знайти одну d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:   
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"] */


function checkString(string) {
    var str1 = string.match(/db+d/gi).toString();
    var str2 = str1.match(/b+/gi).toString();
    var str3 = str1.match(/d$/).toString();
    return [str1, str2, str3];
}
checkString("kcdbBdbsbz");








//task - 4
/* Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */

function swap(string) {
    var newArray = string.split(" ");
    console.log(newArray[1] + ", " + newArray[0]);
}
swap("Java Script");








//task - 5
/* Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). \-*{4}-*{4}-* */
function validation(string) {
    return /^\d{4}-*\d{4}-*\d{4}-*\d{4}$/.test(string);
}
validation("9999-9999-9999-9999");







//task - 6
/*Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
- Цифри (0-9).
- Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
- В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
- Символ “-” не може повторюватися.
*/


function checkEmail(string) {
   return /^[a-zA-Z0-9]+-*\w+@[a-zA-Z]+\.[a-zA-Z]/.test(string);
    
}
checkEmail("my_mail@gmail.com");
checkEmail('#my_mail@gmail.com'); 








//task - 7
/*
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, 
номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою кількістю 
(наприклад, 3.4).
	Приклад роботи:
checkLogin('ee11ret3');
true 
11 
3

checkLogin('ee1*1ret3');
false 
1 		2(times)
3
*/
function checkLogin(string) {
    var test = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/.test(string); 
    var match = string.match(/\d+\.?\d*/g);
    console.log(test);
    for (var i = 0; i < match.length; i++) {
        console.log(match[i]);
    }
}

checkLogin("ee11ret3");
checkLogin('ee1*1ret3');






