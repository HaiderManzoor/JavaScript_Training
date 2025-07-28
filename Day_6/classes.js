class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`hello from ${this.name}`)
    }
    my_age(){
        console.log(`my age is ${this.age}`)
    }
}

const P1 = new Person("haider",21)
P1.greet()
P1.my_age()


// inheritance
class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade
    }
    result(){
        console.log(`${this.name}'s grade is ${this.grade}`)
    }
}
const stu = new Student("haider",23,"A")
stu.result()