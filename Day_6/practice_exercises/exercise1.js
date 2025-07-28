class Student{
    constructor(id,name,grades){
        this.id = id
        this.name = name
        this.grades = grades
    }
    calculate_gpa(){
        const sum = this.grades.reduce((total,num)=>total+num,0)
        const result = sum/this.grades.length.toFixed(2)
        return result
    }
    display_details(){
        console.log(`name : ${this.name}`)
        console.log(`id : ${this.id}`)
        console.log(`grades : ${this.calculate_gpa()}`)
    }
}
const stu = new Student("bsdsf1m017","haider",[3.5,3.3,2.9,4.0,3.1])
stu.display_details()