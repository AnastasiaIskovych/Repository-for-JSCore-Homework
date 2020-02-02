/*  task -1 
. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
Результат має бути 3 */

function propsCount(currentObject) {
    console.log(Object.keys(currentObject).length);
}



/*task - 2
2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), 
яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
Виведіть також масив значень властивостей об’єкта.*/

var student = {
    name: "Ivan",
    lastName: "Ivanenko",
    age: 22,
    faculty: "Economics",
    speciality: "Makrketing"
}
function showProps(obj) {
console.log(Object.keys(obj));
console.log(Object.values(obj));
}
showProps(student);





//task - 3

class Worker {
    #experience = 1.2;
  
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
  
    showSalary() {
        return this.dayRate * this.workingDays; 
    }
  
    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }

    salaryWorker() {
        return this.dayRate * this.workingDays * this.#experience
    }
    
    get experience() {
        return this.#experience;
    }

    set experience(value) {
		this.#experience = value;
    }
	
}

var worker1 = new Worker("Homa Homenko", 5, 23);
console.log(worker1.fullName); 
console.log("Salary: " + worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log("Salary: " + worker1.showSalaryWithExperience());  
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log("Salary: " + worker1.showSalaryWithExperience());
console.log(worker1.fullName + ": " + worker1.salaryWorker());


var worker2 = new Worker("Ruslan Ruslanenko", 45, 22);
console.log(worker2.fullName); 
console.log("Salary: " + worker2.showSalary());
console.log("New experience: " + worker2.experience);
console.log("Salary: " + worker2.showSalaryWithExperience());  
worker2.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log("Salary: " + worker2.showSalaryWithExperience());
console.log(worker2.fullName + ": " + worker2.salaryWorker());


var worker3 = new Worker("Ivan Ivanenko", 72, 24);  
console.log(worker3.fullName); 
console.log("Salary: " + worker3.showSalary());
console.log("New experience: " + worker3.experience);
console.log("Salary: " + worker3.showSalaryWithExperience());  
worker3.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log("Salary: " + worker3.showSalaryWithExperience());
console.log(worker3.fullName + ": " + worker3.salaryWorker());

var workersArray = [worker1, worker2, worker3];
var workersComparison = workersArray.sort((a, b) => {
    a.salaryWorker() - b.salaryWorker();
});

for (i = 0; i < workersArray.length; i++) {
    console.log(workersArray[i].fullName + " : " + workersArray[i].salaryWorker());
}







// task - 4
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
  
  	showFullName() {
      return this.name + " " + this.surname; 
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
  
    showFullName(middleName) {
    	return this.surname + " " + this.name + " " + middleName; 
    }
  
  	showCourse() {
      var currentDate = new Date().getFullYear();
      return currentDate - this.year;
    }
}

var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 




//task - 5 

class GeometricFigure {
    getArea() {
    return 0;
    }
    toString() {
         return Object.getPrototypeOf(this).constructor.name;
    }
}


class Triangle extends GeometricFigure {
    constructor(perimeter, height) {
        super();
        this.perimeter = perimeter;
        this.height = height;
    }
    getArea() {
        return this.height * this.perimeter / 2; 
    }

}
class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
}
class Circle extends GeometricFigure { 
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return this.radius * Math.PI;
    }

}

function handleFigures(figures) {
    return figures.reduce(function (sum, figure) {
        if (figure instanceof GeometricFigure) {
            console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea());
            return sum + figure.getArea(); //тут не працює - не відображає суму площ всіх фігур 
        }
        throw Error("Incorrect data was entered");
    }, 0);
    
}


var figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
     console.log(handleFigures(figures));