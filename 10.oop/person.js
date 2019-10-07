// Class

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        })

        return bio;
    }
    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.secondName = names[1];
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`; 
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the class`;
    }
    updateGrade(score) {
        this.grade += score;
    }
}

const firstStudent = new Student('Alex', 'Broskow', 34, 'Skating', 71);
console.log(firstStudent.getBio());
firstStudent.updateGrade(-30);
console.log(firstStudent.getBio());
