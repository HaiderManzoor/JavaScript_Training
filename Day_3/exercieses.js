const person = {
    name : "haider",
    age :22,
    city : "lahore",
    is_Student : true
}

console.log("Summary of object is : ",person)

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}



const person_details = {
    name : "haider",
    age : 22,
    isSingle : true,
    nationality : "Pakistani",
    summary(){
        return (`Summary of person is : \n name is : ${this.name} \n age is : ${this.age} \n Is Single : ${this.isSingle} \n Nationalty : ${this.nationality} `)
    }
}

console.log(person_details.summary())



const book = {
    author : "haider",
    title : "atomic habbits",
    year : 2002,
    summary(){
        return (`Summary of book is : \n name is : ${this.author} \n title is : ${this.title} \n Published year : ${this.year}`)
    }
}
console.log(book.summary())

console.log("----------------------------")


// write a closure to count function count

function calltracker(){
    let count = 0
    return function(){
        count ++
        console.log(`function called ${count} times.`)
    }
}

const call_func = calltracker()
call_func()
call_func()
call_func()

console.log("----------------------------")


const person_2 = {
    name : "haider",
    age :22,
    city : "lahore",
    is_Student : true
}

const {name,age,city,is_Student} = person_2

console.log(name);
console.log(age);
console.log(city);
console.log(is_Student);


t