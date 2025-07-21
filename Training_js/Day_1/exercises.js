// Exercise #1 :

let name = "haider"
let age_1 = 25
let is_Student = true
let hobbies = ["snooker","reading books"]
let details = {name : "haider", age : 23}
console.log(typeof name)
console.log(typeof age_1)
console.log(typeof is_Student) 
console.log(typeof hobbies)
console.log(typeof details)

// Exercise #2 :
function Is_Prime(number){
    if(number<=1){
        console.log("numbr is not a prime number")
    }
    for (let i=2 ; i<number;i++){
        if (number%i==0){
            console.log("number is not a prime number")
            return;
        }
    }
    console.log("number is a prime number")
    return
}
Is_Prime(10)
Is_Prime(3)



// Exercise #3 : 
let age = 21
const msg = (age >=18) ? "you can vote :)" : "you cannot vote :("
console.log(msg)