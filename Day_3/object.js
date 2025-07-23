let person = {
    name : "haider",
    age :22,
    nationality : "Pakistan"
}
console.log(person)



let user = new Object()
user.name = "haider"
user.email = "haidermanzoor901@gmail.com"
console.log(user)
user.age = 22
console.log(user)


const person_1 = {
    name : "haider",
    age : 21,
    greet : function(){
        console.log("hello " + this.name);
    }
}

console.log(person_1.name)
console.log(person_1["age"])
person_1.greet()
person_1.city = "lahore"
person_1.isStudent = true
person_1.say_hi = function(){
    console.log("hi from ",this.name)
}
console.log(person_1)


function show(){
    console.log(this.show)
}
show()

const person_h = {
    name : "haider",
    age : 22,
    greeet : ()=>{
        console.log("hello " + this.name )
    }
}
person_h.greeet()
console.log(Object.keys(person_h))
console.log(Object.values(person_h))
console.log(Object.entries(person_h))


const person_a = {
    name : "haider",
    age : 22,
    location : "lahore"
}
const {name , age} = person_a
console.log(name)
console.log(age)

const details = {
    name :  "jhgf",
    age : 21
}

console.log()


// using constructor function 
function Person(name,age) {
    this.name = name
    this.age = age
}

console.log(person_1.age)

delete person_1.age

console.log(person_1)



const person_ah = {
    name : "haider",
    age : 24,
    greet : function(){
        console.log(`hello + ${this.name}`)
    }
}

console.log(person_ah)


function show() {
  console.log(this);
}

show(); 

console.log(Object.keys(person_1))
console.log(Object.values(person_1))

console.log(Object.entries(person_1))


const extra = {country: "pakistan"
}
const updatePerson = Object.assign({},person_1,extra)
console.log(updatePerson)

console.log(person_1)


const {country,isStudent} = person_1
console.log(country)
console.log(isStudent)


const {name:person_name} = person_1
console.log(person_name)


function outer(){
    let count = 0
    return function inner(){
        count ++
        console.log(count)
    }
}
const helo = outer()



(() => {
  let privateVar = 42;
  console.log(privateVar); // Only accessible here
})();


